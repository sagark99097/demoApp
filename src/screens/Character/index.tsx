import React, {useState, useEffect} from 'react';
import {FlatList, SafeAreaView} from 'react-native';

import CharacterItem from '../../component/characterItem';
import APIS from '../../services/Apis';
import {GET} from '../../services/baseService';
import {characterItemProps, WorkflowData} from '../../types/componentType';
import CharacterDetailModal from '../Modal/CharacterDetail';
import styles from './styles';

const Character = () => {
  const [page, setPage] = useState(1);
  const [loadMore, setLoadMore] = useState(true);
  const [characterData, setCharacterData] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [locationData, setLocationData] = useState();
  const [singleCharacterData, setSingleCharacterData] = useState<
    WorkflowData | undefined
  >();

  useEffect(() => {
    getChanaracterData();
  }, []);

  useEffect(() => {
    if (isModalVisible && singleCharacterData) {
      getLocationData(singleCharacterData?.location?.url || '');
    }
  }, [isModalVisible]);

  const getChanaracterData = async () => {
    await GET(APIS.GET_CHARACTER + page).then((res: any) => {
      setCharacterData(res.results);
    });
  };

  const loadMorePages = async () => {
    if (!loadMore) return;
    const tempPage = page + 1;
    setPage(tempPage);
    setLoadMore(true);
    fetchMoreCharacterData(page);
  };

  const fetchMoreCharacterData = async (page: number) => {
    await GET(APIS.GET_CHARACTER + page).then((res: any) => {
      if (res.results.length === 0) {
        setLoadMore(false);
      }
      const tempArr: any = [...characterData, ...res.results];
      setCharacterData(tempArr);
    });
  };

  const onPressCloseModal = () => {
    setIsModalVisible(false);
  };

  const onPressOpenModal = (item: WorkflowData) => {
    setSingleCharacterData(item);
    setIsModalVisible(true);
  };

  const getLocationData = async (url: string) => {
    await GET(url).then((res: any) => {
      setLocationData(res);
    });
  };

  const renderItem = ({item, index}: characterItemProps) => {
    return (
      <CharacterItem
        item={item}
        index={index}
        onPressOpenModal={onPressOpenModal}
      />
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={characterData}
        extraData={characterData}
        onEndReachedThreshold={0.2}
        onEndReached={loadMorePages}
        renderItem={renderItem}
        contentContainerStyle={styles.listBody}
        numColumns={2}
      />
      <CharacterDetailModal
        isVisible={isModalVisible}
        onBackdropPress={onPressCloseModal}
        item={singleCharacterData}
        locationData={locationData}
      />
    </SafeAreaView>
  );
};

export default Character;

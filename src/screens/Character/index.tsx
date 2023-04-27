import React, {useState, useEffect} from 'react';
import {FlatList, SafeAreaView, Alert} from 'react-native';

import CharacterItem from '../../component/characterItem';
import APIS from '../../services/Apis';
import {GET} from '../../services/baseService';
import {characterItemProps, WorkflowData} from '../../types/componentType';
import CharacterDetailModal from '../Modal/CharacterDetail';
import styles from './styles';

/**
 * Character - Screen in show list character
 **/
const Character = () => {
  const [page, setPage] = useState(1);
  const [loadMore, setLoadMore] = useState(true);
  const [characterData, setCharacterData] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [locationData, setLocationData] = useState();
  const [singleCharacterData, setSingleCharacterData] = useState<
    WorkflowData | undefined
  >();

  //useEffect - launch screen of call
  useEffect(() => {
    getCharacterData();
  }, []);

  //useEffect on [isModalVisible] - If the isModalVisible changes, get the location data
  useEffect(() => {
    if (isModalVisible && singleCharacterData) {
      getLocationData(singleCharacterData?.location?.url || '');
    }
  }, [isModalVisible]);

  //getCharacterData - get character using api call
  const getCharacterData = () => {
    GET(APIS.GET_CHARACTER + page)
      .then((res: any) => {
        setCharacterData(res.results);
      })
      .catch(() => {
        Alert.alert('Something went wrong');
      });
  };

  //loadMorePages - increase the page count and call api
  const loadMorePages = () => {
    if (!loadMore) return;
    const tempPage = page + 1;
    setPage(tempPage);
    setLoadMore(true);
    fetchMoreCharacterData(page);
  };

  //fetchMoreCharacterData - get character using api call.
  const fetchMoreCharacterData = (page: number) => {
    GET(APIS.GET_CHARACTER + page)
      .then((res: any) => {
        if (res.results.length === 0) {
          setLoadMore(false);
        }
        const tempArr: any = [...characterData, ...res.results];
        setCharacterData(tempArr);
      })
      .catch(() => {
        Alert.alert('Something went wrong');
      });
  };

  //onPressCloseModal - Close character details modal
  const onPressCloseModal = () => {
    setIsModalVisible(false);
  };

  //onPressCloseModal - Open character details modal and set that particuler character item
  const onPressOpenModal = (item: WorkflowData) => {
    setSingleCharacterData(item);
    setIsModalVisible(true);
  };

  //getLocationData - get location data using api call.
  const getLocationData = async (url: string) => {
    await GET(url).then((res: any) => {
      setLocationData(res);
    });
  };

  //Redering character item
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

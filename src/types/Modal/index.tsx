import {WorkflowData} from '../componentType';

export interface CharacterDetailsProps {
  onBackdropPress: () => void;
  isVisible: boolean;
  item: WorkflowData | undefined;
  locationData: any;
}

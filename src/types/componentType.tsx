type LocationProps = {
  name: string;
  url: string;
};

export interface WorkflowData {
  image?: string | undefined;
  species?: string;
  gender?: string;
  name?: string;
  location?: LocationProps;
}

export interface characterItemProps {
  item: WorkflowData;
  index: number;
  onPressOpenModal?: (item: WorkflowData) => void;
}

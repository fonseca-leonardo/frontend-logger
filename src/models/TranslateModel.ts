export default interface TranslateModel {
    _id: string;
    name: string;
    singular?: string;
    plural?: string;
    male?: {
        singular: string;
        plural?: string;
    };
    female?: {
        singular: string;
        plural?: string;
    };
}

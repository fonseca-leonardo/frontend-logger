export default interface TranslationModel {
    _id: string;
    language: string;
    projectId: string;
    isDefault: boolean;
    translations: Array<{
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
    }>;
}

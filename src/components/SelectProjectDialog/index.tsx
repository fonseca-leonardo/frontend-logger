import React, { useEffect, useState } from 'react';
import { Form, Formik } from 'formik';
import { useTranslation } from 'react-i18next';

import ProjectModel from '../../models/ProjectModel';
import ProjectService from '../../services/ProjectService';

import {
    StyledField,
    Container,
    Backdrop,
    DialogContainer,
    DialogTitleContainer,
    DialogBodyContainer,
    DialogActionContainer,
    Radio,
    RadioControl,
    RadioInput,
    RadioLabel,
} from './styles';
import Spinner from '../Spinner';
import { useAuth } from '../../hooks/auth';

interface Props {
    currentProject?: ProjectModel;
    onChangeProject(_: ProjectModel): void;
}

const SelectProjectDialog: React.FC<Props> = ({
    onChangeProject,
    currentProject,
}) => {
    const { t } = useTranslation();
    const [listProjects, setListProjects] = useState<ProjectModel[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const { signIn, user } = useAuth();

    const fetchListProjects = async () => {
        try {
            setIsLoading(true);
            const result = await ProjectService.listProjects();
            setListProjects(result.data);
            setIsLoading(false);
        } catch (error) {
            setIsLoading(false);
        }
    };

    const onSubmit = async (updateProject: ProjectModel) => {
        const project = listProjects.find((el) => el._id === updateProject._id);
        if (project) {
            try {
                setIsLoading(true);
                const { token } = await ProjectService.selectProject(
                    project._id,
                );
                signIn({ token, user });
                onChangeProject({
                    _id: project._id,
                    name: project.name,
                });

                window.location.reload();
            } catch (error) {
                setIsLoading(false);
            }
        }
    };

    useEffect(() => {
        fetchListProjects();
    }, []);

    return (
        <Container>
            <Backdrop />
            <DialogContainer>
                <Formik
                    initialValues={currentProject || ({} as ProjectModel)}
                    onSubmit={onSubmit}
                    enableReinitialize
                >
                    {({ setValues, values }) => (
                        <Form>
                            <DialogTitleContainer>
                                <h3>{t('Choose a project')}</h3>
                            </DialogTitleContainer>
                            {isLoading ? (
                                <div
                                    style={{
                                        display: 'flex',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        minHeight: 200,
                                    }}
                                >
                                    <Spinner height={40} width={40} />
                                </div>
                            ) : (
                                <>
                                    <DialogBodyContainer>
                                        {listProjects.map((project) => (
                                            <Radio
                                                key={project._id}
                                                htmlFor="selectedProjected"
                                                onClick={() =>
                                                    setValues(project)
                                                }
                                            >
                                                <RadioInput>
                                                    <StyledField
                                                        type="radio"
                                                        name="_id"
                                                        value={project._id}
                                                    />
                                                    <RadioControl
                                                        selected={
                                                            values._id ===
                                                            project._id
                                                        }
                                                    />
                                                </RadioInput>
                                                <RadioLabel>
                                                    {project.name}
                                                </RadioLabel>
                                            </Radio>
                                        ))}
                                    </DialogBodyContainer>
                                    <DialogActionContainer>
                                        <button type="submit">
                                            {t('Confirm')}
                                        </button>
                                    </DialogActionContainer>
                                </>
                            )}
                        </Form>
                    )}
                </Formik>
            </DialogContainer>
        </Container>
    );
};

export default SelectProjectDialog;

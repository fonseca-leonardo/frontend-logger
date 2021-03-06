import React, { useCallback, useState } from 'react';
import { Form, Formik } from 'formik';
import { useHistory } from 'react-router-dom';
import * as Yup from 'yup';
import { useTranslation } from 'react-i18next';

import Button from '../../components/Button';
import { Card } from '../../components/Card';
import TextInput from '../../components/TextInput';

import { Container } from './styles';
import AuthService from '../../services/AuthService';
import { useAuth } from '../../hooks/auth';

interface ILoginValidation {
    email: string;
    password: string;
}

const LoginValidationSchema = Yup.object().shape({
    email: Yup.string()
        .email('E-mail inválido')
        .required('E-mail é obrigatório'),
    password: Yup.string().required('Senha é obrigatória'),
});

export default function LoginPage() {
    const [loginForm, setLoginForm] = useState<ILoginValidation>({
        email: 'leonardorodriguesfonseca@gmail.com',
        password: '123456',
    });
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const history = useHistory();
    const { t } = useTranslation();
    const { signIn } = useAuth();

    const onChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        setLoginForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    }, []);

    const onSubmit = useCallback(
        async (_: ILoginValidation) => {
            try {
                setIsLoading(true);
                const { email, password } = loginForm;
                const { token } = await AuthService.login({ email, password });
                signIn({ token });
                const { data } = await AuthService.authorize();
                signIn({ user: data, token });
                setIsLoading(false);
            } catch (error) {
                setIsLoading(false);
            }
        },
        [history],
    );

    return (
        <Container>
            <Card style={{ maxWidth: 650, width: '100%' }}>
                <header>{t('Sign In')}</header>
                <Formik
                    initialValues={loginForm}
                    validationSchema={LoginValidationSchema}
                    enableReinitialize
                    onSubmit={onSubmit}
                >
                    {({ errors, touched }) => (
                        <Form>
                            <section>
                                <span>{t('E-mail')}</span>
                                <TextInput
                                    name="email"
                                    disabled={isLoading}
                                    value={loginForm.email}
                                    onChange={onChange}
                                    error={touched.email ? errors.email : ''}
                                />
                            </section>
                            <section>
                                <span>{t('Password')}</span>
                                <TextInput
                                    name="password"
                                    disabled={isLoading}
                                    value={loginForm.password}
                                    type="password"
                                    onChange={onChange}
                                    error={
                                        touched.password ? errors.password : ''
                                    }
                                />
                            </section>
                            <section>
                                <Button
                                    type="submit"
                                    isLoading={isLoading}
                                    disabled={
                                        !!errors.email ||
                                        !!errors.password ||
                                        isLoading
                                    }
                                >
                                    {t('Send')}
                                </Button>
                            </section>
                        </Form>
                    )}
                </Formik>
            </Card>
        </Container>
    );
}

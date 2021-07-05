import React, { useCallback, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { IoMdClose } from 'react-icons/io';

import IconButton from '../../../../components/IconButton';

import {
    Container,
    DetailModal,
    Modal,
    ModalBackdrop,
    CloseButton,
} from './styles';

interface Props {
    detail: {
        id: string;
        statusCode: number;
        request: {
            headers: any;
            body: any;
        };
        response: {
            headers: any;
            body: any;
        };
    };
}

const EndpointDetail: React.FC<Props> = ({ detail }) => {
    const [openDetail, setOpenDetail] = useState<boolean>(false);
    const { t } = useTranslation();

    const handleUserKeyPress = useCallback((event: KeyboardEvent) => {
        if (event.key === 'Escape') {
            setOpenDetail(false);
        }
    }, []);

    useEffect(() => {
        window.addEventListener('keydown', handleUserKeyPress);

        return () => {
            window.removeEventListener('keydown', handleUserKeyPress);
        };
    }, [handleUserKeyPress]);

    return (
        <>
            <Container onClick={() => setOpenDetail(true)}>
                <div>{JSON.stringify(detail.request)}</div>
                <div>
                    status: {detail.statusCode}{' '}
                    {JSON.stringify(detail.response)}
                </div>
            </Container>
            {openDetail && (
                <DetailModal>
                    <ModalBackdrop onClick={() => setOpenDetail(false)} />

                    <div style={{ position: 'relative' }}>
                        <CloseButton onClick={() => setOpenDetail(false)}>
                            <IconButton title={t('Close')}>
                                <IoMdClose size={24} />
                            </IconButton>
                        </CloseButton>
                        <Modal>
                            <div>
                                <div>
                                    <h3>Request</h3>
                                    <div>
                                        <h4>Headers</h4>
                                        <span>
                                            {JSON.stringify(
                                                detail.request.headers,
                                            )}
                                        </span>
                                    </div>
                                    <div>
                                        <h4>Body</h4>
                                        <span>
                                            {JSON.stringify(
                                                detail.request.body,
                                            )}
                                        </span>
                                    </div>
                                </div>
                                <hr />
                                <div>
                                    <h3>Response - {detail.statusCode}</h3>
                                    <div>
                                        <h4>Headers</h4>
                                        <span>
                                            {JSON.stringify(
                                                detail.response.headers,
                                            )}
                                        </span>
                                    </div>
                                    <div>
                                        <h4>Body</h4>
                                        <span>
                                            {JSON.stringify(
                                                detail.response.body,
                                            )}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </Modal>
                    </div>
                </DetailModal>
            )}
        </>
    );
};

export default EndpointDetail;

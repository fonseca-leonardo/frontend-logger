import React, { useCallback, useState, useEffect } from 'react';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import { startOfMonth, endOfMonth, Locale } from 'date-fns';
import { ptBR, enUS } from 'date-fns/locale';
import { useTranslation } from 'react-i18next';
import { FiChevronDown } from 'react-icons/fi';

import { PageContainer } from '../../components/PageContainer';
import { useTheme } from '../../contexts/theme';
import Button from '../../components/Button';
import { IEndpointsRequest } from '../../services/MetricsService/IResponse';

import EndpointDetail from './components/EndpointDetail';

import {
    TitleContainer,
    StyledDatePicker,
    ListContainer,
    StatusContainer,
    EndpointContainer,
    Wrapper,
    ExpandableRow,
    Expand,
    ExpandContent,
    SearchContainer,
} from './styles';
import { useLoading } from '../../hooks/loadingPage';
import MetricsService from '../../services/MetricsService';

interface IEndpointDetailRequest {
    data: Array<{
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
    }>;
}

const localeKeyValues: { [x: string]: Locale } = {
    'pt-BR': ptBR,
    en: enUS,
};

export default function EndPoint() {
    const [startDate, setStartDate] = useState<Date | null>(
        startOfMonth(new Date()),
    );
    const [endDate, setEndDate] = useState<Date | null>(endOfMonth(new Date()));
    const [selectedRow, setSelectedRow] = useState<string | null>(null);

    const [endpointMetricsRequest, setEndpointMetricsRequest] =
        useState<IEndpointsRequest>({
            data: [],
        });
    const [endpointDetail] = useState<IEndpointDetailRequest>({
        data: [
            {
                id: '12312',
                statusCode: 200,
                request: {
                    headers: {
                        Authorization:
                            'blablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablabblablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablalablablablablablablablabla',
                    },
                    body: { hello: 'world', luquinha: 'doido' },
                },
                response: {
                    headers: { Authorization: 'blablabla2' },
                    body: {
                        hello: 'world',
                        luquinha: 'doido',
                        luquinha1: 'doido',
                        luquinha2: 'doido',
                        luquinha3: 'doido',
                        luquinha4: 'doido',
                        luquinha5: 'doido',
                        luquinha6: 'doido',
                        luquinha7: 'doido',
                        luquinha8: 'doido',
                        luquinha9: 'doido',
                        luquinha10: 'doido',
                        luquinha11: 'doido',
                        luquinha12: 'doido',
                        luquinha13: 'doido',
                    },
                },
            },
            {
                id: '32445',
                statusCode: 200,
                request: {
                    headers: { Authorization: 'blablabla' },
                    body: { hello: 'world', luquinha: 'doido' },
                },
                response: {
                    headers: { Authorization: 'blablabla' },
                    body: { hello: 'world', luquinha: 'doido' },
                },
            },
            {
                id: '7654754',
                statusCode: 200,
                request: {
                    headers: { Authorization: 'blablabla' },
                    body: { hello: 'world', luquinha: 'doido' },
                },
                response: {
                    headers: { Authorization: 'blablabla' },
                    body: { hello: 'world', luquinha: 'doido' },
                },
            },
            {
                id: '34345',
                statusCode: 200,
                request: {
                    headers: { Authorization: 'blablabla' },
                    body: { hello: 'world', luquinha: 'doido' },
                },
                response: {
                    headers: { Authorization: 'blablabla' },
                    body: { hello: 'world', luquinha: 'doido' },
                },
            },
            {
                id: '53453',
                statusCode: 200,
                request: {
                    headers: { Authorization: 'blablabla' },
                    body: { hello: 'world', luquinha: 'doido' },
                },
                response: {
                    headers: { Authorization: 'blablabla' },
                    body: { hello: 'world', luquinha: 'doido' },
                },
            },
            {
                id: '4356456',
                statusCode: 200,
                request: {
                    headers: { Authorization: 'blablabla' },
                    body: { hello: 'world', luquinha: 'doido' },
                },
                response: {
                    headers: { Authorization: 'blablabla' },
                    body: { hello: 'world', luquinha: 'doido' },
                },
            },
        ],
    });
    const { theme } = useTheme();
    const { t, i18n } = useTranslation();
    const { setLoading } = useLoading();
    const selectedLocale = localeKeyValues[i18n.language || 'en'];

    const handleSelectRow = useCallback(
        (endponint: string) => {
            if (selectedRow === endponint) {
                setSelectedRow(null);
            } else {
                fetchEndpointDetail();
                setSelectedRow(endponint);
            }
        },
        [selectedRow],
    );

    const fetchEndpointDetail = useCallback(() => {}, []);

    const fetchEndpointMetrics = useCallback(async () => {
        try {
            setLoading(true);
            const result = await MetricsService.getEndpointMetrics('5m');
            setEndpointMetricsRequest(result);
            setLoading(false);
        } catch (error) {
            setLoading(false);
        }
    }, []);

    useEffect(() => {
        fetchEndpointMetrics();
    }, []);

    return (
        <PageContainer>
            <TitleContainer>
                <h1>{t('Calls')}</h1>
                <SearchContainer>
                    <MuiPickersUtilsProvider
                        utils={DateFnsUtils}
                        locale={selectedLocale}
                    >
                        <StyledDatePicker
                            value={startDate}
                            onChange={(date) => setStartDate(date)}
                            format="dd/MM/yyyy"
                            KeyboardButtonProps={{
                                disabled: true,
                                style: { display: 'none' },
                            }}
                            label={t('Start Date')}
                        />
                        <StyledDatePicker
                            value={endDate}
                            onChange={(date) => setEndDate(date)}
                            KeyboardButtonProps={{
                                disabled: true,
                                style: { display: 'none' },
                            }}
                            format="dd/MM/yyyy"
                            label={t('End Date')}
                        />
                    </MuiPickersUtilsProvider>
                    <Button>{t('Reload')}</Button>
                </SearchContainer>
            </TitleContainer>
            <Wrapper
                style={{ display: 'flex', justifyContent: 'space-between' }}
            >
                <ListContainer>
                    <div
                        style={{
                            overflowY: 'auto',
                            height: '680px',
                            padding: '4px',
                            marginTop: 6,
                            paddingRight: 12,
                        }}
                    >
                        {endpointMetricsRequest.data.map((request) => (
                            <ExpandableRow
                                key={request.tag}
                                selected={selectedRow === request.tag}
                            >
                                <Expand
                                    expanded={selectedRow === request.tag}
                                    onClick={() => handleSelectRow(request.tag)}
                                >
                                    <EndpointContainer>
                                        <span>{request.tag}</span>
                                    </EndpointContainer>
                                    <StatusContainer>
                                        <span
                                            style={{
                                                color: theme.successColor,
                                            }}
                                        >
                                            {t('Success')}
                                            <br /> {request.success}
                                        </span>
                                        <span
                                            style={{
                                                color: theme.warningColor,
                                            }}
                                        >
                                            {t('Alert')}
                                            <br /> {request.warning}
                                        </span>
                                        <span
                                            style={{ color: theme.errorColor }}
                                        >
                                            {t('Error')}
                                            <br /> {request.error}
                                        </span>
                                    </StatusContainer>
                                    <FiChevronDown
                                        style={{ marginLeft: 16 }}
                                        size={42}
                                    />
                                </Expand>
                                {selectedRow === request.tag && (
                                    <>
                                        <section
                                            style={{
                                                width: '100%',
                                                display: 'flex',
                                                marginBottom: 8,
                                            }}
                                        >
                                            <span style={{ flex: 1 }}>
                                                <strong>Request</strong>
                                            </span>
                                            <span style={{ flex: 1 }}>
                                                <strong>Response</strong>
                                            </span>
                                        </section>
                                        <ExpandContent>
                                            {endpointDetail.data.map(
                                                (detail) => (
                                                    <EndpointDetail
                                                        key={detail.id}
                                                        detail={detail}
                                                    />
                                                ),
                                            )}
                                        </ExpandContent>
                                    </>
                                )}
                            </ExpandableRow>
                        ))}
                    </div>
                </ListContainer>
            </Wrapper>
        </PageContainer>
    );
}

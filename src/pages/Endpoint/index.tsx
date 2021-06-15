import React, { useCallback, useState } from 'react';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import { startOfMonth, endOfMonth } from 'date-fns';
import { ptBR, enUS } from 'date-fns/locale';
import { useTranslation } from 'react-i18next';

import { PageContainer } from '../../components/PageContainer';

import { TitleContainer, StyledDatePicker, ListContainer,
    StatusContainer, EndpointContainer, Row, Wrapper, ExpandableRow, Expand, ExpandContent } from './styles';
import { useTheme } from '../../contexts/theme';

interface IEndpointsRequest {
    data: Array<{
        endpoint: string;
        total: number;
        warning: number;
        success: number;
        error: number;
        method: string;
    }>;
}

const localeKeyValues: {[x: string]: Locale} = {
    'pt-BR': ptBR,
    'en': enUS,
}

export default function EndPoint() {
    const [startDate, setStartDate] = useState<Date | null>(startOfMonth(new Date()));
    const [endDate, setEndDate] = useState<Date | null>(endOfMonth(new Date()));
    const [selectedRow, setSelectedRow] = useState<string | null>(null);
    const [endpointsRequest] = useState<IEndpointsRequest>({
        data: [
            {
                method: 'POST',
                total: 1350,
                endpoint: '/login',
                warning: 100,
                success: 1200,
                error: 50
            },
            {
                method: 'GET',
                endpoint: '/auth',
                total: 1350,
                warning: 100,
                success: 1200,
                error: 50
            },
            {
                method: 'GET',
                endpoint: '/user/extract',
                total: 1350,
                warning: 100,
                success: 1200,
                error: 50
            },
            {
                method: 'PATCH',
                endpoint: '/material',
                total: 1350,
                warning: 100,
                success: 1200,
                error: 50
            },
        ],
    });
    const [chachedEndpointsRequest] = useState<IEndpointsRequest>({
        data: [
            {
                method: 'POST',
                total: 1350,
                endpoint: '/login',
                warning: 100,
                success: 1200,
                error: 50
            },
            {
                method: 'GET',
                endpoint: '/auth',
                total: 1350,
                warning: 100,
                success: 1200,
                error: 50
            },
            {
                method: 'GET',
                endpoint: '/user/extract/teste/a',
                total: 1350,
                warning: 100,
                success: 1200,
                error: 50
            },
            {
                method: 'PATCH',
                endpoint: '/material',
                total: 1350,
                warning: 100,
                success: 1200,
                error: 50
            },

        ],
    });
    const { theme } = useTheme();
    const { t, i18n } = useTranslation();
    const selectedLocale = localeKeyValues[i18n.language || 'en'];

    const handleSelectRow = useCallback((endponint: string) => {
        if(selectedRow === endponint) {
            setSelectedRow(null);
        } else {
            setSelectedRow(endponint);
        }
    }, [selectedRow])

    return (
        <PageContainer>
            <TitleContainer>
                <h1>{t('Calls')}</h1>
                <div>
                    <MuiPickersUtilsProvider utils={DateFnsUtils} locale={selectedLocale}>
                        <StyledDatePicker
                            value={startDate}
                            onChange={(date) => setStartDate(date)}
                            format="dd/MM/yyyy"
                            KeyboardButtonProps={{ disabled: true, style: {display: 'none'} }}
                            label={t('Start Date')} />
                        <StyledDatePicker
                            value={endDate}
                            onChange={(date) => setEndDate(date)}
                            KeyboardButtonProps={{ disabled: true, style: {display: 'none'} }}
                            format="dd/MM/yyyy"
                            label={t('End Date')} />
                    </MuiPickersUtilsProvider>
                </div>
            </TitleContainer>
            <Wrapper style={{display: 'flex', justifyContent: 'space-between'}}>
                <ListContainer>
                    <span style={{ padding: '0px  12px' }}>{t('Cached')}</span>
                    <div style={{ overflowY: 'auto', height: '680px', padding: '4px', marginTop: 6, paddingRight: 12  }}>
                        {
                            chachedEndpointsRequest.data.map(request => (
                                <ExpandableRow key={request.endpoint + request.method} selected={selectedRow === request.endpoint} onClick={() => handleSelectRow(request.endpoint)}>
                                    <Expand>
                                        <EndpointContainer>
                                            <span>{request.method} - {request.endpoint}</span>
                                        </EndpointContainer>
                                        <StatusContainer>
                                            <span style={{ color: theme.successColor }}>Sucesso <br/> {request.success}</span>
                                            <span style={{ color: theme.warningColor }}>Alerta <br/> {request.warning}</span>
                                            <span style={{ color: theme.errorColor }}>Erro <br/> {request.error}</span>
                                        </StatusContainer>
                                    </Expand>
                                    {
                                        selectedRow === request.endpoint && (
                                            <ExpandContent>
                                                <h1>Luquinha</h1>
                                            </ExpandContent>
                                        )
                                    }
                                </ExpandableRow>
                            ))
                        }
                    </div>
                </ListContainer>
                <ListContainer>
                    <span style={{ padding: '0px  12px',}}>{t('Saved_plural')}</span>
                    <div style={{ overflowY: 'auto', height: '680px', padding: '4px  4px', marginTop: 6, paddingRight: 12 }}>
                        {
                            endpointsRequest.data.map(request => (
                                <Row key={request.endpoint + request.method}>
                                    <EndpointContainer>
                                        <span>{request.method} - {request.endpoint}</span>
                                    </EndpointContainer>
                                    <StatusContainer>
                                        <span style={{ color: theme.successColor }}>Sucesso <br/> {request.success}</span>
                                        <span style={{ color: theme.warningColor }}>Alerta <br/> {request.warning}</span>
                                        <span style={{ color: theme.errorColor }}>Erro <br/> {request.error}</span>
                                    </StatusContainer>

                                </Row>
                            ))
                        }
                    </div>
                </ListContainer>
            </Wrapper>
        </PageContainer>
    )
}

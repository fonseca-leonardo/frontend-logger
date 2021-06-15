import React, { useState } from 'react';
import PieChart from './components/PieChart';
import BarChart from './components/BarChart';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import { startOfMonth, endOfMonth } from 'date-fns';
import {ptBR} from 'date-fns/locale';
import { useTranslation } from 'react-i18next';


import { TitleContainer, StyledDatePicker, } from './styles';
import LineChart from './components/LineChart';
import { PageContainer } from '../../components/PageContainer';

export interface IStatusCodeReport {
    data: Array<{
        statusCode: number;
        count: number;
    }>;
}

export interface IRequestCountReport {
    data: Array<{
        date: string | Date;
        count: number;
    }>;
}



export default function DashboardPage() {
    const [statusCodeReport, ] = useState<IStatusCodeReport>({
        data: [
            {
                statusCode: 200,
                count: 2150
            },
            {
                count: 523,
                statusCode: 400,
            },
            {
                statusCode: 401,
                count: 345
            },
            {
                statusCode: 500,
                count: 500
            },
        ]
    });

    const [startDate, setStartDate] = useState<Date | null>(startOfMonth(new Date()));
    const [endDate, setEndDate] = useState<Date | null>(endOfMonth(new Date()));
    const { t } = useTranslation();

    const [requestCountReport, ] = useState<IRequestCountReport>({
        data: [
            {
                date: '2021-06-03T00:00:00.000Z',
                count: 2150
            },
            {
                date: '2021-06-04T00:00:00.000Z',
                count: 2250,
            },
            {
                date: '2021-06-05T00:00:00.000Z',
                count: 2000
            },
            {
                date: '2021-06-06T00:00:00.000Z',
                count: 2300
            },
            {
                date: '2021-06-07T00:00:00.000Z',
                count: 1800
            },
            {
                date: '2021-06-08T00:00:00.000Z',
                count: 2500
            },
            {
                date: '2021-06-09T00:00:00.000Z',
                count: 1000
            },
            {
                date: '2021-06-10T00:00:00.000Z',
                count: 1208
            },
            {
                date: '2021-06-11T00:00:00.000Z',
                count: 2300
            },
        ]
    });

    return (
        <PageContainer>
            <TitleContainer>
                <h1>{t('Dashboard')}</h1>
                <div>
                    <MuiPickersUtilsProvider utils={DateFnsUtils} locale={ptBR}>
                        <StyledDatePicker
                            value={startDate}
                            onChange={(date) => setStartDate(date)}
                            format="dd/MM/yyyy"
                            KeyboardButtonProps={{ disabled: true, style: {display: 'none'} }}
                            label={t('Start Date')} />
                        <StyledDatePicker
                            value={endDate}
                            onChange={(date) => setEndDate(date)}
                            format="dd/MM/yyyy"
                            KeyboardButtonProps={{ disabled: true, style: {display: 'none'} }}
                            label={t('End Date')} />
                    </MuiPickersUtilsProvider>
                </div>
            </TitleContainer>
            <div>
                <LineChart  requestCountReport={requestCountReport}/>
            </div>
            <div style={{ width: "100%", marginTop: '16px', display: 'flex', flexWrap: 'wrap'}}>
                <BarChart statusCodeReport={statusCodeReport} />
                <PieChart statusCodeReport={statusCodeReport} />
            </div>
        </PageContainer>
    )
}
import React from 'react';
import { Card } from '../../../../components/Card';
import { LineChart as ReLineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { useTranslation } from 'react-i18next';

import { IRequestCountReport } from '../..';
import { useTheme } from '../../../../contexts/theme';

import { StyledCursor } from './styles'

interface Props {
    requestCountReport: IRequestCountReport;
}

function CustomCursor({ payload, label, active }: any) {
    const { t } = useTranslation();

    if (active) {
      return (
        <StyledCursor className="custom-tooltip">
          <p className="label">{t('dateReport', {date: label})}</p>
          <p className="desc">{t('callsReport', {total: payload[0].value})}</p>
        </StyledCursor>
      );
    }
  
    return null;
}
  
const LineChart: React.FC<Props> = ({ requestCountReport }) => {
    const { theme } = useTheme();
    const { t } = useTranslation();

    return (
        <Card >
            <span style={{ fontSize: 16, margin: '12px 0px'}}>{t('Request Total x Time')}</span>
            <ResponsiveContainer width="100%" height={360} >
                <ReLineChart data={requestCountReport.data}>
                    <defs>
                        <linearGradient
                            id="colorUv"
                            x1="0%"
                            y1="0%"
                            x2="100%"
                            y2="0%"
                        >
                            <stop offset="0%" stopColor={theme.gradient[0]} />
                            <stop offset="50%" stopColor={theme.gradient[1]} />
                            <stop offset="100%" stopColor={theme.gradient[2]} />
                        </linearGradient>
                    </defs>
                    <Line
                        type="monotone"
                        dataKey="count"
                        animateNewValues
                        stroke="url(#colorUv)"
                        strokeWidth={4}
                        />
                    <XAxis dataKey="date"/>
                    <YAxis dataKey="count"/>
                    <Tooltip contentStyle={{ background: theme.background, width: 200 }} content={CustomCursor} cursor={{fill: 'rgba(0,0,0,0.2)' }}/>

                </ReLineChart>
            </ResponsiveContainer>
        </Card>
    )
}


export default LineChart;

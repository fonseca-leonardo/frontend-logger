import React from 'react';
import { BarChart as ReBarChart, Tooltip, XAxis, YAxis, Bar, ResponsiveContainer } from 'recharts';
import { useTranslation } from 'react-i18next';

import { Card } from '../../../../components/Card';
import { useTheme } from '../../../../contexts/theme';

import { IStatusCodeReport } from '../../index'
import { StyledCursor } from './styles';

interface Props {
    statusCodeReport: IStatusCodeReport;
}

function CustomCursor({ payload, label, active }: any) {
    const { t } = useTranslation();

    if (active) {
      return (
        <StyledCursor className="custom-tooltip">
          <p className="label">{`Status Code ${label}`}</p>
          <p className="desc">{t('barChartReport', { total: payload[0].value, statusCode: label })}</p>

        </StyledCursor>
      );
    }
  
    return null;
  }

const BarChart: React.FC<Props> = ({statusCodeReport}) => {
    const { theme } = useTheme();
    const { t } = useTranslation();


    return (
      <Card style={{ width: "33.333%", minWidth: 250 }}>
        <span style={{ fontSize: 16, margin: '8px 0px'}}>{t('Request Total x Status Code')}</span>
        <ResponsiveContainer width="100%" minWidth="200px" height={220}>
          <ReBarChart data={statusCodeReport.data} >
              <XAxis dataKey="statusCode"/>
              <YAxis dataKey="count"/>
              <Bar  dataKey="count" barSize={20} fill={theme.gradient[2]} radius={[4,4,0,0]} />
              <Tooltip contentStyle={{ background: theme.background, width: 200 }} content={CustomCursor} cursor={{fill: 'rgba(0,0,0,0.2)' }}/>
          </ReBarChart>
        </ResponsiveContainer>
      </Card>
    )
}

export default BarChart;
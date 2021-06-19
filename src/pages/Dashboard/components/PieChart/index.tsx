import React from 'react';
import {
    PieChart as RePieChart,
    Pie,
    Tooltip,
    Cell,
    ResponsiveContainer,
} from 'recharts';
import { Card } from '../../../../components/Card';
import PieColors from '../../../../constants/colors';
import { useTheme } from '../../../../contexts/theme';

import { IStatusCodeReport } from '../../index';
import { StyledCursor } from './styles';

interface Props {
    statusCodeReport: IStatusCodeReport;
}

function CustomCursor({ payload, active }: any) {
    if (active) {
        return (
            <StyledCursor className="custom-tooltip">
                <p className="desc">{`Foram ${payload[0].value} chamadas`}</p>
            </StyledCursor>
        );
    }

    return null;
}

const PieChart: React.FC<Props> = ({ statusCodeReport }) => {
    const { theme } = useTheme();

    const renderCustomizedLabel = ({
        cx,
        cy,
        midAngle,
        innerRadius,
        outerRadius,
        percent,
    }: any) => {
        const RADIAN = Math.PI / 180;

        const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
        const x = cx + radius * Math.cos(-midAngle * RADIAN);
        const y = cy + radius * Math.sin(-midAngle * RADIAN);

        return (
            <text
                x={x}
                y={y}
                fill={theme.fontColor}
                style={{ fontWeight: 'bold' }}
                textAnchor={x > cx ? 'start' : 'end'}
                dominantBaseline="central"
            >
                {`${(percent * 100).toFixed(0)}%`}
            </text>
        );
    };

    return (
        <Card style={{ marginLeft: 32, width: '33.333%', minWidth: 250 }}>
            <span style={{ fontSize: 16, margin: '8px 0px' }}>
                Contador de status code
            </span>
            <ResponsiveContainer width="100%" minWidth="200px" height={220}>
                <RePieChart>
                    <Pie
                        data={statusCodeReport.data}
                        dataKey="count"
                        cx="50%"
                        cy="50%"
                        label={renderCustomizedLabel}
                        labelLine={false}
                        style={{ stroke: 'transparent' }}
                    >
                        {statusCodeReport.data.map((el) => (
                            <Cell
                                key={el.statusCode}
                                fill={PieColors[el.statusCode]}
                            />
                        ))}
                    </Pie>
                    <Tooltip
                        contentStyle={{
                            background: theme.background,
                            width: 200,
                        }}
                        content={CustomCursor}
                        cursor={{ fill: 'rgba(0,0,0,0.2)' }}
                    />
                </RePieChart>
            </ResponsiveContainer>
        </Card>
    );
};

export default PieChart;

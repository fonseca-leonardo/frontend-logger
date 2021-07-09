/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
// eslint-disable-next-line no-unused-vars
import React, { useEffect, useCallback, useState, useRef } from 'react';

import { PageContainer } from '../../components/PageContainer';
import { useTheme } from '../../contexts/theme';
import { useLoading } from '../../hooks/loadingPage';
import MetricsService from '../../services/MetricsService';
import { IDashboardResponse } from '../../services/MetricsService/IResponse';

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
    const { theme } = useTheme();
    const iframeRef = useRef<HTMLIFrameElement>(null);
    const { setLoading } = useLoading();
    const [fetchDashboardRequest, setFetchDashboardRequest] =
        useState<IDashboardResponse>({
            data: {
                dashUrl: '',
            },
        });

    const fetchDashboard = useCallback(async () => {
        try {
            setLoading(true);
            const result = await MetricsService.getDashboard();
            setFetchDashboardRequest(result);
            setLoading(false);
        } catch (error) {
            setLoading(false);
        }
    }, []);

    useEffect(() => {
        fetchDashboard();
    }, []);

    useEffect(() => {
        if (iframeRef.current) {
            iframeRef.current.contentWindow?.removeEventListener(
                'keypress',
                (e) => e.stopPropagation(),
            );
        }
    }, [iframeRef]);

    return (
        <PageContainer>
            {fetchDashboardRequest.data.dashUrl && (
                <iframe
                    ref={iframeRef}
                    id="dashboard"
                    title="dash"
                    src={`${fetchDashboardRequest.data.dashUrl}?kiosk=tv&theme=${theme.name}&tab=vizualization&fullscreen&edit`}
                    width="100%"
                    height="750px"
                    frameBorder="0"
                />
            )}
        </PageContainer>
    );
}

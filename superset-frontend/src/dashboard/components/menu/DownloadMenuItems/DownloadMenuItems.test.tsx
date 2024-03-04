/**
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
<<<<<<< HEAD
=======
<<<<<<<< HEAD:superset-frontend/plugins/plugin-chart-echarts/test/Waterfall/buildQuery.test.ts
import { SqlaFormData } from '@superset-ui/core';
import buildQuery from '../../src/Waterfall/buildQuery';

describe('Waterfall buildQuery', () => {
  const formData = {
    datasource: '5__table',
    granularity_sqla: 'ds',
    metric: 'foo',
    x_axis: 'bar',
    groupby: ['baz'],
    viz_type: 'waterfall',
  };

  it('should build query fields from form data', () => {
    const queryContext = buildQuery(formData as unknown as SqlaFormData);
    const [query] = queryContext.queries;
    expect(query.metrics).toEqual(['foo']);
    expect(query.columns?.[0]).toEqual(
      expect.objectContaining({ sqlExpression: 'bar' }),
    );
    expect(query.columns?.[1]).toEqual('baz');
  });
========
import React from 'react';
>>>>>>> 2d98af4662 (merge from upstream to master)
import { render, screen } from 'spec/helpers/testing-library';
import DownloadMenuItems from '.';

const createProps = () => ({
<<<<<<< HEAD
=======
  addDangerToast: jest.fn(),
>>>>>>> 2d98af4662 (merge from upstream to master)
  pdfMenuItemTitle: 'Export to PDF',
  imageMenuItemTitle: 'Download as Image',
  dashboardTitle: 'Test Dashboard',
  logEvent: jest.fn(),
<<<<<<< HEAD
  dashboardId: '123',
});

const renderComponent = () => {
  render(<DownloadMenuItems {...createProps()} />, {
    useRedux: true,
  });
=======
});

const renderComponent = () => {
  render(<DownloadMenuItems {...createProps()} />);
>>>>>>> 2d98af4662 (merge from upstream to master)
};

test('Should render menu items', () => {
  renderComponent();
  expect(
    screen.getByRole('menuitem', { name: 'Export to PDF' }),
  ).toBeInTheDocument();
  expect(
    screen.getByRole('menuitem', { name: 'Download as Image' }),
  ).toBeInTheDocument();
<<<<<<< HEAD
=======
>>>>>>>> 2d98af4662 (merge from upstream to master):superset-frontend/src/dashboard/components/menu/DownloadMenuItems/DownloadMenuItems.test.tsx
>>>>>>> 2d98af4662 (merge from upstream to master)
});

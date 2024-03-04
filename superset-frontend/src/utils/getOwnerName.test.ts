<<<<<<< HEAD
/**
=======
/*
>>>>>>> 2d98af4662 (merge from upstream to master)
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
<<<<<<<< HEAD:superset-frontend/src/utils/getOwnerName.test.ts
=======
<<<<<<<< HEAD:superset-frontend/packages/superset-ui-core/test/time-comparison/index.test.ts

import {
  ComparisonTimeRangeType,
  getComparisonFilters,
  getComparisonInfo,
} from '@superset-ui/core';

describe('index', () => {
  it('exports modules', () => {
    [ComparisonTimeRangeType, getComparisonFilters, getComparisonInfo].forEach(
      x => expect(x).toBeDefined(),
    );
  });
========
>>>>>>> 2d98af4662 (merge from upstream to master)
import getOwnerName from './getOwnerName';

test('render owner name correctly', () => {
  expect(getOwnerName({ id: 1, first_name: 'Foo', last_name: 'Bar' })).toEqual(
    'Foo Bar',
  );
<<<<<<< HEAD

  expect(getOwnerName({ id: 2, full_name: 'John Doe' })).toEqual('John Doe');
=======
>>>>>>> 2d98af4662 (merge from upstream to master)
});

test('return empty string for undefined owner', () => {
  expect(getOwnerName(undefined)).toEqual('');
<<<<<<< HEAD
});
========
import { DEFAULT_LEGEND_FORM_DATA } from '../constants';
import { defaultXAxis } from '../defaults';
import { EchartsBubbleFormData } from './types';

export const DEFAULT_FORM_DATA: Partial<EchartsBubbleFormData> = {
  ...DEFAULT_LEGEND_FORM_DATA,
  emitFilter: false,
  logXAis: false,
  logYAxis: false,
  xAxisTitleMargin: 30,
  yAxisTitleMargin: 30,
  truncateXAxis: false,
  truncateYAxis: false,
  xAxisBounds: [null, null],
  yAxisBounds: [null, null],
  xAxisLabelRotation: defaultXAxis.xAxisLabelRotation,
  opacity: 0.6,
};

export const MINIMUM_BUBBLE_SIZE = 5;
>>>>>>>> 2d98af4662 (merge from upstream to master):superset-frontend/plugins/plugin-chart-echarts/src/Bubble/constants.ts
=======
>>>>>>>> 2d98af4662 (merge from upstream to master):superset-frontend/src/utils/getOwnerName.test.ts
});
>>>>>>> 2d98af4662 (merge from upstream to master)

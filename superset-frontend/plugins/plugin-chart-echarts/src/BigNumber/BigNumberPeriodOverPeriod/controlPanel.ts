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
import { t } from '@superset-ui/core';
import {
  ControlPanelConfig,
  getStandardizedControls,
  sharedControls,
  sections,
} from '@superset-ui/chart-controls';
import { headerFontSize, subheaderFontSize } from '../sharedControls';
import { ColorSchemeEnum } from './types';
=======
import {
  ComparisonTimeRangeType,
  t,
  validateTimeComparisonRangeValues,
} from '@superset-ui/core';
import {
  ControlPanelConfig,
  ControlPanelState,
  ControlState,
  getStandardizedControls,
  sharedControls,
} from '@superset-ui/chart-controls';
import { headerFontSize, subheaderFontSize } from '../sharedControls';
>>>>>>> 2d98af4662 (merge from upstream to master)

const config: ControlPanelConfig = {
  controlPanelSections: [
    {
      label: t('Query'),
      expanded: true,
      controlSetRows: [
        ['metric'],
        ['adhoc_filters'],
        [
          {
<<<<<<< HEAD
=======
            name: 'time_comparison',
            config: {
              type: 'SelectControl',
              label: t('Range for Comparison'),
              default: 'r',
              choices: [
                ['r', 'Inherit range from time filters'],
                ['y', 'Year'],
                ['m', 'Month'],
                ['w', 'Week'],
                ['c', 'Custom'],
              ],
              rerender: ['adhoc_custom'],
              description: t(
                'Set the time range that will be used for the comparison metrics. ' +
                  'For example, "Year" will compare to the same dates one year earlier. ' +
                  'Use "Inherit range from time filters" to shift the comparison time range' +
                  'by the same length as your time range and use "Custom" to set a custom comparison range.',
              ),
            },
          },
        ],
        [
          {
            name: `adhoc_custom`,
            config: {
              ...sharedControls.adhoc_filters,
              label: t('Filters for Comparison'),
              description:
                'This only applies when selecting the Range for Comparison Type: Custom',
              visibility: ({ controls }) =>
                controls?.time_comparison?.value ===
                ComparisonTimeRangeType.Custom,
              mapStateToProps: (
                state: ControlPanelState,
                controlState: ControlState,
              ) => ({
                ...(sharedControls.adhoc_filters.mapStateToProps?.(
                  state,
                  controlState,
                ) || {}),
                externalValidationErrors: validateTimeComparisonRangeValues(
                  state.controls?.time_comparison?.value,
                  controlState.value,
                ),
              }),
            },
          },
        ],
        [
          {
>>>>>>> 2d98af4662 (merge from upstream to master)
            name: 'row_limit',
            config: sharedControls.row_limit,
          },
        ],
      ],
    },
    {
      label: t('Chart Options'),
      expanded: true,
      controlSetRows: [
        ['y_axis_format'],
<<<<<<< HEAD
        [
          {
            name: 'percentDifferenceFormat',
            config: {
              ...sharedControls.y_axis_format,
              label: t('Percent Difference format'),
            },
          },
        ],
=======
>>>>>>> 2d98af4662 (merge from upstream to master)
        ['currency_format'],
        [
          {
            ...headerFontSize,
            config: { ...headerFontSize.config, default: 0.2 },
          },
        ],
        [
          {
            ...subheaderFontSize,
            config: {
              ...subheaderFontSize.config,
              default: 0.125,
              label: t('Comparison font size'),
            },
          },
        ],
        [
          {
            name: 'comparison_color_enabled',
            config: {
              type: 'CheckboxControl',
              label: t('Add color for positive/negative change'),
              renderTrigger: true,
              default: false,
              description: t('Add color for positive/negative change'),
            },
          },
        ],
<<<<<<< HEAD
        [
          {
            name: 'comparison_color_scheme',
            config: {
              type: 'SelectControl',
              label: t('color scheme for comparison'),
              default: ColorSchemeEnum.Green,
              renderTrigger: true,
              choices: [
                [ColorSchemeEnum.Green, 'Green for increase, red for decrease'],
                [ColorSchemeEnum.Red, 'Red for increase, green for decrease'],
              ],
              visibility: ({ controls }) =>
                controls?.comparison_color_enabled?.value === true,
              description: t(
                'Adds color to the chart symbols based on the positive or ' +
                  'negative change from the comparison value.',
              ),
            },
          },
        ],
      ],
    },
    sections.timeComparisonControls({
      multi: false,
      showCalculationType: false,
      showFullChoices: false,
    }),
=======
      ],
    },
>>>>>>> 2d98af4662 (merge from upstream to master)
  ],
  controlOverrides: {
    y_axis_format: {
      label: t('Number format'),
    },
  },
  formDataOverrides: formData => ({
    ...formData,
    metric: getStandardizedControls().shiftMetric(),
  }),
};

export default config;

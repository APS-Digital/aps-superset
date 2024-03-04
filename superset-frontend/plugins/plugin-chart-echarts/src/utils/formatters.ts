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

import {
  CurrencyFormatter,
  ensureIsArray,
  getNumberFormatter,
  getTimeFormatter,
  isSavedMetric,
  NumberFormats,
  QueryFormMetric,
<<<<<<< HEAD
  SMART_DATE_DETAILED_ID,
  SMART_DATE_ID,
  SMART_DATE_VERBOSE_ID,
=======
  smartDateDetailedFormatter,
  smartDateFormatter,
>>>>>>> 2d98af4662 (merge from upstream to master)
  TimeFormatter,
  ValueFormatter,
} from '@superset-ui/core';

<<<<<<< HEAD
export const getSmartDateDetailedFormatter = () =>
  getTimeFormatter(SMART_DATE_DETAILED_ID);

export const getSmartDateFormatter = () => getTimeFormatter(SMART_DATE_ID);

export const getSmartDateVerboseFormatter = () =>
  getTimeFormatter(SMART_DATE_VERBOSE_ID);

=======
>>>>>>> 2d98af4662 (merge from upstream to master)
export const getPercentFormatter = (format?: string) =>
  getNumberFormatter(
    !format || format === NumberFormats.SMART_NUMBER
      ? NumberFormats.PERCENT
      : format,
  );

export const getYAxisFormatter = (
  metrics: QueryFormMetric[],
  forcePercentFormatter: boolean,
  customFormatters: Record<string, ValueFormatter>,
  defaultFormatter: ValueFormatter,
  format?: string,
) => {
  if (forcePercentFormatter) {
    return getPercentFormatter(format);
  }
  const metricsArray = ensureIsArray(metrics);
  if (
    metricsArray.every(isSavedMetric) &&
    metricsArray
      .map(metric => customFormatters[metric])
      .every(
        (formatter, _, formatters) =>
          formatter instanceof CurrencyFormatter &&
          (formatter as CurrencyFormatter)?.currency?.symbol ===
            (formatters[0] as CurrencyFormatter)?.currency?.symbol,
      )
  ) {
    return customFormatters[metricsArray[0]];
  }
  return defaultFormatter ?? getNumberFormatter();
};

export function getTooltipTimeFormatter(
  format?: string,
): TimeFormatter | StringConstructor {
<<<<<<< HEAD
  if (format === SMART_DATE_ID) {
    return getSmartDateDetailedFormatter();
=======
  if (format === smartDateFormatter.id) {
    return smartDateDetailedFormatter;
>>>>>>> 2d98af4662 (merge from upstream to master)
  }
  if (format) {
    return getTimeFormatter(format);
  }
  return String;
}

export function getXAxisFormatter(
  format?: string,
): TimeFormatter | StringConstructor | undefined {
<<<<<<< HEAD
  if (format === SMART_DATE_ID || !format) {
=======
  if (format === smartDateFormatter.id || !format) {
>>>>>>> 2d98af4662 (merge from upstream to master)
    return undefined;
  }
  if (format) {
    return getTimeFormatter(format);
  }
  return String;
}

/*
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

import { makeSingleton } from '../utils';

<<<<<<< HEAD:superset-frontend/packages/superset-ui-core/src/color/LabelsColorMapSingleton.ts
export enum LabelsColorMapSource {
=======
export enum SharedLabelColorSource {
>>>>>>> 2d98af4662 (merge from upstream to master):superset-frontend/packages/superset-ui-core/src/color/SharedLabelColorSingleton.ts
  Dashboard,
  Explore,
}

export class LabelsColorMap {
  chartsLabelsMap: Map<number, { labels: string[]; scheme?: string }>;

  colorMap: Map<string, string>;

  source: LabelsColorMapSource;

  constructor() {
    // holds labels and original color schemes for each chart in context
    this.chartsLabelsMap = new Map();
    this.colorMap = new Map();
<<<<<<< HEAD:superset-frontend/packages/superset-ui-core/src/color/LabelsColorMapSingleton.ts
    this.source = LabelsColorMapSource.Dashboard;
=======
    this.source = SharedLabelColorSource.Dashboard;
>>>>>>> 2d98af4662 (merge from upstream to master):superset-frontend/packages/superset-ui-core/src/color/SharedLabelColorSingleton.ts
  }

  updateColorMap(categoricalNamespace: any, colorScheme?: string) {
    const newColorMap = new Map();
    this.colorMap.clear();
    this.chartsLabelsMap.forEach((chartConfig, sliceId) => {
      const { labels, scheme: originalChartColorScheme } = chartConfig;
      const currentColorScheme = colorScheme || originalChartColorScheme;
      const colorScale = categoricalNamespace.getScale(currentColorScheme);

      labels.forEach(label => {
        const newColor = colorScale.getColor(label, sliceId);
        newColorMap.set(label, newColor);
      });
    });
    this.colorMap = newColorMap;
  }

  getColorMap() {
    return this.colorMap;
  }

<<<<<<< HEAD:superset-frontend/packages/superset-ui-core/src/color/LabelsColorMapSingleton.ts
  addSlice(
    label: string,
    color: string,
    sliceId: number,
    colorScheme?: string,
  ) {
    if (this.source !== LabelsColorMapSource.Dashboard) return;

    const chartConfig = this.chartsLabelsMap.get(sliceId) || {
      labels: [],
      scheme: '',
    };
    const { labels } = chartConfig;
=======
  addSlice(label: string, color: string, sliceId?: number) {
    if (
      this.source !== SharedLabelColorSource.Dashboard ||
      sliceId === undefined
    )
      return;
    const labels = this.sliceLabelMap.get(sliceId) || [];
>>>>>>> 2d98af4662 (merge from upstream to master):superset-frontend/packages/superset-ui-core/src/color/SharedLabelColorSingleton.ts
    if (!labels.includes(label)) {
      labels.push(label);
      this.chartsLabelsMap.set(sliceId, {
        labels,
        scheme: colorScheme,
      });
    }
    this.colorMap.set(label, color);
  }

  removeSlice(sliceId: number) {
<<<<<<< HEAD:superset-frontend/packages/superset-ui-core/src/color/LabelsColorMapSingleton.ts
    if (this.source !== LabelsColorMapSource.Dashboard) return;

    this.chartsLabelsMap.delete(sliceId);
=======
    if (this.source !== SharedLabelColorSource.Dashboard) return;
    this.sliceLabelMap.delete(sliceId);
>>>>>>> 2d98af4662 (merge from upstream to master):superset-frontend/packages/superset-ui-core/src/color/SharedLabelColorSingleton.ts
    const newColorMap = new Map();

    this.chartsLabelsMap.forEach(chartConfig => {
      const { labels } = chartConfig;
      labels.forEach(label => {
        newColorMap.set(label, this.colorMap.get(label));
      });
    });
    this.colorMap = newColorMap;
  }

  clear() {
    this.chartsLabelsMap.clear();
    this.colorMap.clear();
  }
}

const getInstance = makeSingleton(LabelsColorMap);

export default getInstance;

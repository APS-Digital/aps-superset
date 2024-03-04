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
import { Menu } from 'src/components/Menu';
import DownloadScreenshot from './DownloadScreenshot';
import { DownloadScreenshotFormat } from './types';
=======
import React from 'react';
import { Menu } from 'src/components/Menu';
import DownloadAsImage from './DownloadAsImage';
import DownloadAsPdf from './DownloadAsPdf';
>>>>>>> 2d98af4662 (merge from upstream to master)

export interface DownloadMenuItemProps {
  pdfMenuItemTitle: string;
  imageMenuItemTitle: string;
<<<<<<< HEAD
  dashboardTitle: string;
  logEvent?: Function;
  dashboardId: string;
=======
  addDangerToast: Function;
  dashboardTitle: string;
  logEvent?: Function;
>>>>>>> 2d98af4662 (merge from upstream to master)
}

const DownloadMenuItems = (props: DownloadMenuItemProps) => {
  const {
    pdfMenuItemTitle,
    imageMenuItemTitle,
<<<<<<< HEAD
    logEvent,
    dashboardId,
=======
    addDangerToast,
    dashboardTitle,
    logEvent,
>>>>>>> 2d98af4662 (merge from upstream to master)
    ...rest
  } = props;

  return (
    <Menu selectable={false}>
<<<<<<< HEAD
      <DownloadScreenshot
        text={pdfMenuItemTitle}
        dashboardId={dashboardId}
        logEvent={logEvent}
        format={DownloadScreenshotFormat.PDF}
        {...rest}
      />
      <DownloadScreenshot
        text={imageMenuItemTitle}
        dashboardId={dashboardId}
        logEvent={logEvent}
        format={DownloadScreenshotFormat.PNG}
=======
      <DownloadAsPdf
        text={pdfMenuItemTitle}
        addDangerToast={addDangerToast}
        dashboardTitle={dashboardTitle}
        logEvent={logEvent}
        {...rest}
      />
      <DownloadAsImage
        text={imageMenuItemTitle}
        addDangerToast={addDangerToast}
        dashboardTitle={dashboardTitle}
        logEvent={logEvent}
>>>>>>> 2d98af4662 (merge from upstream to master)
        {...rest}
      />
    </Menu>
  );
};

export default DownloadMenuItems;

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
import { isValidElement } from 'react';
=======
import React from 'react';
>>>>>>> 2d98af4662 (merge from upstream to master)
import type { QueryState } from '@superset-ui/core';
import { render } from 'spec/helpers/testing-library';
import QueryStateLabel from '.';

jest.mock('src/components/Label', () => () => <div data-test="mock-label" />);

const mockedProps = {
  query: {
    state: 'running' as QueryState,
  },
};
test('is valid', () => {
<<<<<<< HEAD
  expect(isValidElement(<QueryStateLabel {...mockedProps} />)).toBe(true);
=======
  expect(React.isValidElement(<QueryStateLabel {...mockedProps} />)).toBe(true);
>>>>>>> 2d98af4662 (merge from upstream to master)
});
test('has an Overlay and a Popover', () => {
  const { getByTestId } = render(<QueryStateLabel {...mockedProps} />);
  expect(getByTestId('mock-label')).toBeInTheDocument();
});

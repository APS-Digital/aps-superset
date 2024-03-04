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
<<<<<<<< HEAD:superset-frontend/src/components/Card/Card.test.tsx
import { render } from 'spec/helpers/testing-library';
import Card from '.';

test('should render', () => {
  const { container } = render(<Card />);
  expect(container).toBeInTheDocument();
});
========
import { t } from '../translation';

export default function validateMaxValue(v: unknown, max: Number) {
  if (Number(v) > +max) {
    return t('Value cannot exceed %s', max);
  }
  return false;
}
>>>>>>>> 2d98af4662 (merge from upstream to master):superset-frontend/packages/superset-ui-core/src/validator/validateMaxValue.ts

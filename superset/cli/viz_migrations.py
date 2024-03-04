# Licensed to the Apache Software Foundation (ASF) under one
# or more contributor license agreements.  See the NOTICE file
# distributed with this work for additional information
# regarding copyright ownership.  The ASF licenses this file
# to you under the Apache License, Version 2.0 (the
# "License"); you may not use this file except in compliance
# with the License.  You may obtain a copy of the License at
#
#   http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing,
# software distributed under the License is distributed on an
# "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
# KIND, either express or implied.  See the License for the
# specific language governing permissions and limitations
# under the License.
<<<<<<< HEAD
from __future__ import annotations

from enum import Enum
from typing import Type

import click
from click_option_group import optgroup, RequiredAnyOptionGroup
from flask.cli import with_appcontext

from superset import db
from superset.migrations.shared.migrate_viz.base import (
    MigrateViz,
    Slice,
)
from superset.migrations.shared.migrate_viz.processors import (
    MigrateAreaChart,
    MigrateBarChart,
    MigrateBubbleChart,
    MigrateDistBarChart,
    MigrateDualLine,
    MigrateHeatmapChart,
    MigrateHistogramChart,
    MigrateLineChart,
    MigratePivotTable,
    MigrateSankey,
    MigrateSunburst,
    MigrateTreeMap,
)
from superset.migrations.shared.utils import paginated_update
=======
from enum import Enum

import click
from click_option_group import optgroup, RequiredMutuallyExclusiveOptionGroup
from flask.cli import with_appcontext

from superset import db
>>>>>>> 2d98af4662 (merge from upstream to master)


class VizType(str, Enum):
    AREA = "area"
<<<<<<< HEAD
    BAR = "bar"
    BUBBLE = "bubble"
    DIST_BAR = "dist_bar"
    DUAL_LINE = "dual_line"
    HEATMAP = "heatmap"
    HISTOGRAM = "histogram"
    LINE = "line"
    PIVOT_TABLE = "pivot_table"
    SANKEY = "sankey"
=======
    BUBBLE = "bubble"
    DUAL_LINE = "dual_line"
    LINE = "line"
    PIVOT_TABLE = "pivot_table"
>>>>>>> 2d98af4662 (merge from upstream to master)
    SUNBURST = "sunburst"
    TREEMAP = "treemap"


<<<<<<< HEAD
MIGRATIONS: dict[VizType, Type[MigrateViz]] = {
    VizType.AREA: MigrateAreaChart,
    VizType.BAR: MigrateBarChart,
    VizType.BUBBLE: MigrateBubbleChart,
    VizType.DIST_BAR: MigrateDistBarChart,
    VizType.DUAL_LINE: MigrateDualLine,
    VizType.HEATMAP: MigrateHeatmapChart,
    VizType.HISTOGRAM: MigrateHistogramChart,
    VizType.LINE: MigrateLineChart,
    VizType.PIVOT_TABLE: MigratePivotTable,
    VizType.SANKEY: MigrateSankey,
    VizType.SUNBURST: MigrateSunburst,
    VizType.TREEMAP: MigrateTreeMap,
}

PREVIOUS_VERSION = {
    migration.target_viz_type: migration for migration in MIGRATIONS.values()
}


=======
>>>>>>> 2d98af4662 (merge from upstream to master)
@click.group()
def migrate_viz() -> None:
    """
    Migrate a viz from one type to another.
    """


@migrate_viz.command()
@with_appcontext
@optgroup.group(
<<<<<<< HEAD
    cls=RequiredAnyOptionGroup,
=======
    "Grouped options",
    cls=RequiredMutuallyExclusiveOptionGroup,
>>>>>>> 2d98af4662 (merge from upstream to master)
)
@optgroup.option(
    "--viz_type",
    "-t",
<<<<<<< HEAD
    help=f"The viz type to upgrade: {', '.join(list(VizType))}",
    type=str,
)
@optgroup.option(
    "--id",
    "ids",
    help="The chart ID to upgrade. It can set set multiple times.",
    type=int,
    multiple=True,
)
def upgrade(viz_type: str, ids: tuple[int, ...] | None = None) -> None:
    """Upgrade a viz to the latest version."""
    if ids is None:
        migrate_by_viz_type(VizType(viz_type))
    else:
        migrate_by_id(ids)
=======
    help=f"The viz type to migrate: {', '.join(list(VizType))}",
)
def upgrade(viz_type: str) -> None:
    """Upgrade a viz to the latest version."""
    migrate(VizType(viz_type))
>>>>>>> 2d98af4662 (merge from upstream to master)


@migrate_viz.command()
@with_appcontext
@optgroup.group(
<<<<<<< HEAD
    cls=RequiredAnyOptionGroup,
=======
    "Grouped options",
    cls=RequiredMutuallyExclusiveOptionGroup,
>>>>>>> 2d98af4662 (merge from upstream to master)
)
@optgroup.option(
    "--viz_type",
    "-t",
<<<<<<< HEAD
    help=f"The viz type to downgrade: {', '.join(list(VizType))}",
    type=str,
)
@optgroup.option(
    "--id",
    "ids",
    help="The chart ID to downgrade. It can set set multiple times.",
    type=int,
    multiple=True,
)
def downgrade(viz_type: str, ids: tuple[int, ...] | None = None) -> None:
    """Downgrade a viz to the previous version."""
    if ids is None:
        migrate_by_viz_type(VizType(viz_type), is_downgrade=True)
    else:
        migrate_by_id(ids, is_downgrade=True)


def migrate_by_viz_type(viz_type: VizType, is_downgrade: bool = False) -> None:
    """
    Migrate all charts of a viz type.

    :param viz_type: The viz type to migrate
    :param is_downgrade: Whether to downgrade the charts. Default is upgrade.
    """
    migration: Type[MigrateViz] = MIGRATIONS[viz_type]
    if is_downgrade:
        migration.downgrade(db.session)
    else:
        migration.upgrade(db.session)


def migrate_by_id(ids: tuple[int, ...], is_downgrade: bool = False) -> None:
    """
    Migrate a subset of charts by IDs.

    :param id: Tuple of chart IDs to migrate
    :param is_downgrade: Whether to downgrade the charts. Default is upgrade.
    """
    slices = db.session.query(Slice).filter(Slice.id.in_(ids))
    for slc in paginated_update(
        slices,
        lambda current, total: print(
            f"{('Downgraded' if is_downgrade else 'Upgraded')} {current}/{total} charts"
        ),
    ):
        if is_downgrade:
            PREVIOUS_VERSION[slc.viz_type].downgrade_slice(slc)
        elif slc.viz_type in MIGRATIONS:
            MIGRATIONS[slc.viz_type].upgrade_slice(slc)
=======
    help=f"The viz type to migrate: {', '.join(list(VizType))}",
)
def downgrade(viz_type: str) -> None:
    """Downgrade a viz to the previous version."""
    migrate(VizType(viz_type), is_downgrade=True)


def migrate(viz_type: VizType, is_downgrade: bool = False) -> None:
    """Migrate a viz from one type to another."""
    # pylint: disable=import-outside-toplevel
    from superset.migrations.shared.migrate_viz.processors import (
        MigrateAreaChart,
        MigrateBubbleChart,
        MigrateDualLine,
        MigrateLineChart,
        MigratePivotTable,
        MigrateSunburst,
        MigrateTreeMap,
    )

    migrations = {
        VizType.AREA: MigrateAreaChart,
        VizType.BUBBLE: MigrateBubbleChart,
        VizType.DUAL_LINE: MigrateDualLine,
        VizType.LINE: MigrateLineChart,
        VizType.PIVOT_TABLE: MigratePivotTable,
        VizType.SUNBURST: MigrateSunburst,
        VizType.TREEMAP: MigrateTreeMap,
    }
    if is_downgrade:
        migrations[viz_type].downgrade(db.session)
    else:
        migrations[viz_type].upgrade(db.session)
>>>>>>> 2d98af4662 (merge from upstream to master)

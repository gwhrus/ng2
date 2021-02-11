import { Command } from '../command/command';
import { GridPlugin } from '../plugin/grid.plugin';
import { ColumnModel } from '../column-type/column.model';

export declare class SortToggleCommand extends Command<ColumnModel> {
    constructor(plugin: GridPlugin);
}
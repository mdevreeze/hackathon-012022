export interface IBlock {
    id: string;
    from: number;
    to: number;
    cardName: string;
    cardUrl: string;
    project?: string;
}
export interface IFreeTime {
    from: number;
    to: number;
}
export interface IDay {
    day: string;
    blocks: IBlock|IFreeTime[];
}

export type WeekData = IDay[]
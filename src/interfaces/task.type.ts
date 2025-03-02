import award from '@/interfaces/award.type';

type task = {
    id: string;
    title: string;
    purpose: string;
    featureUrl: string;
    type: string;
    links: string[];
    endsOn: string;
    startedOn: string;
    status: string;
    assignee?: string;
    percentCompleted: number;
    dependsOn: string[];
    participants?: string[];
    completionAward: award;
    lossRate: award;
    isNoteworthy: boolean;
    createdBy: string;
    github?: {
        issue: {
            assignee?: string;
            status: string;
            id: number;
            closedAt?: string;
            assigneeRdsInfo?: {
                firstName: string | null | undefined;
                lastName: string | null | undefined;
                username: string;
            };
        };
    };
};

export type TasksResponseType = {
    message?: string;
    tasks: task[];
    next?: string;
    prev?: string;
};

export type ProgressSliderProps = {
    value: number;
    debounceSlider: (debounceTimeOut: number) => void;
    handleProgressChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export type updateTaskDetails = Partial<Omit<task, 'startedOn'>> & {
    startedOn?: number;
    percentCompleted?: number;
};

export type ProgressBarProps = {
    progress: boolean;
    progressValue: number;
    percentCompleted: number;
    startedOn: string;
    endsOn: string;
    handleProgressChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    debounceSlider: (debounceTimeOut: number) => void;
};

export type ProgressIndicatorProps = {
    percentCompleted: number;
    startedOn: string;
    endsOn: string;
};

export type handleProgressTextProps = {
    progress: boolean;
    handleSaveProgressUpdate: () => void;
    handleProgressUpdate: () => void;
};

enum Tab {
    IN_PROGRESS = 'IN_PROGRESS',
    ASSIGNED = 'ASSIGNED',
    AVAILABLE = 'AVAILABLE',
    NEEDS_REVIEW = 'NEEDS_REVIEW',
    IN_REVIEW = 'IN_REVIEW',
    VERIFIED = 'VERIFIED',
    MERGED = 'MERGED',
    COMPLETED = 'COMPLETED',
}

const TABS = Object.values(Tab);

export { TABS, Tab };

export type TaskRequestPayload = {
    task: updateTaskDetails;
    id: string;
    isDevEnabled?: boolean;
};

export type CardProps = {
    content: task;
    shouldEdit: boolean;
    onContentChange?: (
        changeId: string,
        changeObject: object,
        isDevEnabled?: boolean
    ) => void;
};

export default task;

export type GetAllTaskParamType = {
    dev?: boolean;
    status?: string;
    nextPage?: string;
    prevPage?: string;
};

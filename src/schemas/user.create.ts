export interface UserCreateSchema {
    /**
     * 用户昵称
     * @TJS-type string
     */
    name: string;

    /**
     * 用户性别：0是男，1是女，2是保密
     * @mininum 0
     * @TJS-type integer
     */
    sex: number;

    /**
     * 用户头像
     * @TJS-type string
     */
    avater: string;
}
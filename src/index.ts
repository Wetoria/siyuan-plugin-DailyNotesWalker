import {
    Plugin,
} from "siyuan";
import { jumpToNextDailyNote, jumpToPrevDailyNote } from "./utils";


export default class PluginSample extends Plugin {
    onload() {
        this.addCommand({
            langKey: "goPrevDailyNote",
            hotkey: "⌥⌘↑",
            callback: () => {
                jumpToPrevDailyNote();
            },
        });
        this.addCommand({
            langKey: "goNextDailyNote",
            hotkey: "⌥⌘↓",
            callback: () => {
                jumpToNextDailyNote();
            },
        });
    }
}

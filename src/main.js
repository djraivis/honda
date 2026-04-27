import { initState } from "./features/state.js"
import { initStorage } from "./features/storage.js"
import { initUi } from "./features/ui.js"
import { initDemoList } from "./features/demo-list.js"
import { setupCounter } from "./features/counter.js"

// Order: globals / persistence → layout → visible features → interactive widgets
initState()
initStorage()
initUi()
initDemoList()
setupCounter(document.querySelector("#honda"))

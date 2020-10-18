const GESTURE_ENABLED_TRUE = 'GESTURE_ENABLED_TRUE'
const GESTURE_ENABLED_FALSE = 'GESTURE_ENABLED_FALSE'

interface gestureEnabledTrue {
 type: typeof GESTURE_ENABLED_TRUE
}

interface gestureEnabledFalse {
 type: typeof GESTURE_ENABLED_FALSE
}

type GestureEnabledDispatchType = gestureEnabledTrue | gestureEnabledFalse
export default GestureEnabledDispatchType
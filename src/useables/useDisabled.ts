//--- Import dependencies.
import { computed, defineComponent } from 'vue'

//--- Define and expose `props` object.
export const useDisabledProps = {
    disabled: Boolean,
    readonly: Boolean,
    disabledClass: {type: String, default: 'disabled'},
    readonlyClass: {type: String, default: 'readonly'},
}

export const useDisabled = (props) => {

    //--- Compute CSS classes.
    const classes = computed(() => ({
        [props.disabledClass]: props.disabled,
        [props.readonlyClass]: props.readonly,
    }))

    //--- Compute HTML attributes.
    const attributes = computed(() => ({
        'disabled': props.disabled ? 'true' : undefined,
        'readonly': props.readonly ? 'true' : undefined,
        'aria-disabled': props.disabled ? 'true' : undefined,
        'aria-readonly': props.readonly ? 'true' : undefined,
    }))

    //--- Return reactive properties.
    return { classes, attributes }
}
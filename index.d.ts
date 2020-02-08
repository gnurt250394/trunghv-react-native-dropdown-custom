
declare module "trunghv-react-native-dropdown-custom" {
    import * as React from 'react';
    import * as ReactNative from 'react-native';
    interface DropDownData {
        /** Value of item */
        value: string;
        /**
         * 
        */
        id?: number;
        /** Props for this item */
        props?: Partial<DropDownProps>;
    }
    interface DropdownProperties extends ReactNative.ViewProps {
        /**
         * 
         */
        animationDuration?: number,
        /**
         * 
         */
        button: React.ReactNode,
        /**
         * 
         */
        children: React.ReactNode,
        /**
         * 
         */
        onHidden: () => void,
        /**
         * 
         */
        style: ReactNative.StyleProp<ReactNative.ViewStyle>,
        /**
         * 
         */
        testID: string,
        /**
         * data dropdown typeof { value: default }
         */
        data: DropDownData[]
    }
    /**
     * 
     */
    export default class Dropdown extends React.Component<DropdownProperties> { }
    interface DropdownItemProperties extends ReactNative.ViewProps {
        /**
         * 
         */
        children: React.ReactNode,
        /**
         * 
         */
        disabled: boolean,
        /**
         * 
         */
        disabledTextColor: string,
        /**
         * 
         */
        ellipsizeMode: string,
        /**
         * 
         */
        onPress: (event) => void,
        /**
         * 
         */
        style: StyleProp<ViewStyle>,
        /**
         * 
         */
        textStyle: StyleProp<TextStyle>,
        /**
         * 
         */
        underlayColor: string,
    }
    /**
     * 
     * @param props 
     */
    export function DropdownItem(props: DropdownItemProperties): void

    interface DropdownDividerProperties {
        color: string
    }
    export function DropdownDivider(props: DropdownDividerProperties): void
}
import { forwardRef } from "react"
import { TextInput,StyleSheet,TextInputProps,View, Text } from "react-native"
import { Controller,UseControllerProps } from "react-hook-form"
import { TextInputMask } from 'react-native-masked-text'

type Props = {
  formProps: UseControllerProps
  inputProps: TextInputProps
  error?: string
  mask?: "cpf"
}

const Input = forwardRef<any, Props>(
  ({ formProps, inputProps, error = "", mask }, ref) => {
    return (
      <Controller
        {...formProps}
        render={({ field }) => (
          <View style={styles.container}>

            {mask === "cpf" ? (
              <TextInputMask
                ref={ref}
                type="cpf"
                value={field.value}
                onChangeText={field.onChange}
                onBlur={field.onBlur}
                style={styles.loginInput}
                {...inputProps}
              />
            ) : (
              <TextInput
                ref={ref}
                value={field.value}
                onChangeText={field.onChange}
                onBlur={field.onBlur}
                style={styles.loginInput}
                {...inputProps}
              />
            )}

            {error && (
              <Text style={styles.errorMessage}>
                {error}
              </Text>
            )}

          </View>
        )}
      />
    )
  }
)

export { Input }

const styles = StyleSheet.create({
  loginInput: {
    height: 55,
    backgroundColor: "#ffffffef",
    paddingHorizontal: 12,
    borderRadius: 10,
    fontSize: 19,
    fontWeight: "400",
  },

  container: {
    width: '100%',
  },

  errorMessage: {
    fontSize: 14,
    marginTop: 7,
    color: "#DC1637",
  },
})
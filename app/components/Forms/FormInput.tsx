/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react'
import { Input, FormLabel, FormControl, InputProps } from '@chakra-ui/react'
import FormErrorHandler from './FormErrorHandler'
import { IFormProps } from '../../interfaces/forms.interface'
import { useFocus } from '~/hooks'

const FormInput: React.FC<IFormProps & InputProps & {mTop?: number | string}> = ({
  label,
  error,
  touched,
  required,
  setFieldTouched,
  ...rest
}) => {
  
  return (
    <FormControl id={rest.id || rest.name} pos="relative" mt={rest.mTop}>
      {label && (
        <FormLabel
          fontSize={{ base: 12, xl: 14 }}
          fontWeight={500}
          color="htIndigo.500"
          position={'absolute'}
          zIndex={4}
          bg="white"
          top={-3}
          left={2}
          px={2}
        >
          {label}
        </FormLabel>
      )}
      <Input
        fontSize={{ base: 12, xl: 14 }}
        h={{ base: 10, lg: 14 }}
        borderWidth={0}
        bgColor={"white"}
        _focus={{outline: 'none', borderColor: 'htIndigo.500'}}
        {...rest}
      />
      <FormErrorHandler
        error={error}
        touched={touched}
        onClear={() => setFieldTouched(rest.id || rest.name || '', false)}
      />
    </FormControl>
  )
}

export default FormInput

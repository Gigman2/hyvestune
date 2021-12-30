/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react'
import { Input, InputGroup, InputLeftElement,FormLabel, FormControl, InputProps, Icon } from '@chakra-ui/react'
import FormErrorHandler from './FormErrorHandler'
import { IFormProps } from '../../interfaces/forms.interface'
import { useFocus } from '~/hooks'

const FormInput: React.FC<IFormProps & InputProps & {mTop?: number | string, inputIcon: any}> = ({
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
      <InputGroup color={rest.color}>
      {rest.inputIcon && <InputLeftElement
          pointerEvents='none'
          children={<Icon as={rest.inputIcon} color={rest.color} />}
          mt={1}
        />}
        
        <Input
          fontSize={{ base: 12, xl: 14 }}
          h={{ base: 10, lg: 14 }}
          borderWidth={0}
          bgColor={rest.bg || "white"}
          _focus={{outline: 'none', borderColor: 'htIndigo.500'}}
          {...rest}
        />
      </InputGroup>

      <FormErrorHandler
        error={error}
        touched={touched}
        onClear={() => setFieldTouched(rest.id || rest.name || '', false)}
      />
    </FormControl>
  )
}

export default FormInput

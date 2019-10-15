import React from 'react';
import axios from 'axios';
import { toastr } from 'react-redux-toastr';
import * as Yup from 'yup';

import { Input, Textarea, Form } from '@rocketseat/unform';

import { Button } from 'semantic-ui-react';
import { Subtitle, Container } from './styles';

const schema = Yup.object().shape({
  author: Yup.string().required('O campo nome é obrigatório.'),
  message: Yup.string().required('Digite uma mensagem.'),
});

export default function Sugestões() {
  function handleSubmit(data: any, { resetForm }: any) {
    axios
      .post('https://frontendtestesamba.free.beeceptor.com/breaking-bad/suggestions', data)
      .then(resp => {
        toastr.success(':)', 'Sua mensagem foi enviada com sucesso!');
        resetForm();
      })
      .catch(err =>
        toastr.error(
          ':/',
          'Encontramos um problema ao tentar registrar sua mensagem, tente novamente mais tarde.'
        )
      );
  }
  return (
    <Container>
      <Subtitle>Envie sua sugestão</Subtitle>
      <Form schema={schema} onSubmit={handleSubmit}>
        <Input placeholder="Seu nome" name="author" />
        <Textarea placeholder="Mensagem" name="message" />
        <Button type="submit" color="green" floated="left">
          Enviar
        </Button>
      </Form>
    </Container>
  );
}

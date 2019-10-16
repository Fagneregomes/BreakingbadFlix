import React, { useState } from 'react';
import axios from 'axios';
import { toastr } from 'react-redux-toastr';
import * as Yup from 'yup';

import { Input, Textarea, Form } from '@rocketseat/unform';

import { Button, Dimmer, Loader } from 'semantic-ui-react';
import { Subtitle, Container } from './styles';

const schema = Yup.object().shape({
  author: Yup.string().required('O campo nome é obrigatório.'),
  message: Yup.string().required('Digite uma mensagem.'),
});

export default function Sugestões() {
  const [loading, setLoading] = useState(false);

  function handleSubmit(data: any, { resetForm }: any) {
    setLoading(true);
    axios
      .post('https://frontendtestesamba.free.beeceptor.com/breaking-bad/suggestions', data)
      .then(resp => {
        toastr.success(':)', 'Sua mensagem foi enviada com sucesso!');
        resetForm();
        setLoading(false);
      })
      .catch(err => {
        setLoading(false);
        toastr.error(
          ':/',
          'Encontramos um problema ao tentar registrar sua mensagem, tente novamente mais tarde.'
        );
      });
  }
  return (
    <Container>
      <Subtitle>Envie sua sugestão</Subtitle>
      {loading && (
        <Dimmer active>
          <Loader>Loading</Loader>
        </Dimmer>
      )}
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

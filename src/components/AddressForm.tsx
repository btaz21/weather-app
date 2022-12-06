import { Button, Col, Form, Row } from 'react-bootstrap';
import useInputState from '../hooks/useInputState';

interface AddressFormProps {
  submitAddressParams: (data: string) => void;
}

function AddressForm({ submitAddressParams }: AddressFormProps): JSX.Element {
  const [street, handleStreetChange] = useInputState('');

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    submitAddressParams(street);
  }
  return (
    <div className="mt-4">
      <div className="row justify-content-center">
        <div className="col-8">
          <Form className="bg-light rounded p-4" onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formGridAddress1">
              <Form.Label>Address</Form.Label>
              <Form.Control
                type="text"
                onChange={handleStreetChange}
                value={street}
                placeholder="1234 Main St"
              />
            </Form.Group>

            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </div>
      </div>
    </div>
  );
}

export default AddressForm;

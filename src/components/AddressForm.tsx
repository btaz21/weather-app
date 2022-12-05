import { useState } from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';

interface AddressFormProps {
  onGetWeatherForecast: (lat: string, long: string) => void;
}

interface AddressFormState {
  street: string;
  city: string;
  stateAbbr: string;
  zip: string;
}

function AddressForm({ onGetWeatherForecast }: AddressFormProps): JSX.Element {
  // const inputRef = useRef<HTMLInputElement>(null);
  const [inputs, setInputs] = useState<AddressFormState>({
    street: '',
    city: '',
    stateAbbr: '',
    zip: '',
  });

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
  }
  return (
    <div className="mt-4">
      <div className="row justify-content-center">
        <div className="col-8">
          <Form className="bg-light rounded p-4">
            <Form.Group className="mb-3" controlId="formGridAddress1">
              <Form.Label>Address</Form.Label>
              <Form.Control placeholder="1234 Main St" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formGridAddress2">
              <Form.Label>Address 2</Form.Label>
              <Form.Control placeholder="Apartment, studio, or floor" />
            </Form.Group>

            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridCity">
                <Form.Label>City</Form.Label>
                <Form.Control />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridState">
                <Form.Label>State</Form.Label>
                <Form.Select defaultValue="Choose...">
                  <option>Choose...</option>
                  <option>...</option>
                </Form.Select>
              </Form.Group>

              <Form.Group as={Col} controlId="formGridZip">
                <Form.Label>Zip</Form.Label>
                <Form.Control />
              </Form.Group>
            </Row>

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

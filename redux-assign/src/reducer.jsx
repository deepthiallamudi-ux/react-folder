import React, { useReducer } from 'react';

const initialState = {
  currentStep: 1,
  formValues: { name: '', email: '', username: '', password: '' },
  isSubmitted: false
};

function reducer(state, action) {
  switch (action.type) {
    case 'UPDATE_FIELD':
      return {
        ...state,
        formValues: { ...state.formValues, [action.field]: action.value }
      };
    case 'NEXT_STEP':
      return { ...state, currentStep: state.currentStep + 1 };
    case 'PREVIOUS_STEP':
      return { ...state, currentStep: state.currentStep - 1 };
    case 'SUBMIT_FORM':
      return { ...state, isSubmitted: true };
    case 'RESET_FORM':
      return initialState;
    default:
      return state;
  }
}

export const Reducer = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { formValues } = state;

  const handleFieldChange = (field, value) => {
    dispatch({ type: 'UPDATE_FIELD', field, value });
  };

  const handleNext = () => {
    dispatch({ type: 'NEXT_STEP' });
  };

  const handlePrevious = () => {
    dispatch({ type: 'PREVIOUS_STEP' });
  };

  const handleSubmit = () => {
    dispatch({ type: 'SUBMIT_FORM' });
  };

  const handleReset = () => {
    dispatch({ type: 'RESET_FORM' });
  };

  if (state.isSubmitted) {
    return (
      <div style={{ padding: '20px', textAlign: 'center' }}>
        <h2 style={{ color: 'green' }}>✓ Form Submitted Successfully!</h2>
        <button onClick={handleReset}>
          Submit Another Form
        </button>
      </div>
    );
  }

  return (
    <div style={{ padding: '20px', maxWidth: '400px' }}>
      <h1>Multi-Step Form</h1>
      <p>Step {state.currentStep} of 3</p>

      {state.currentStep === 1 && (
        <>
          <h2>Personal Details</h2>
          <input
            type="text"
            placeholder="Name"
            value={formValues.name}
            onChange={(e) => handleFieldChange('name', e.target.value)}
          />
          <input
            type="email"
            placeholder="Email"
            value={formValues.email}
            onChange={(e) => handleFieldChange('email', e.target.value)}
          />
          <button onClick={handleNext}>Next</button>
        </>
      )}

      {state.currentStep === 2 && (
        <>
          <h2>Account Details</h2>
          <input
            type="text"
            placeholder="Username"
            value={formValues.username}
            onChange={(e) => handleFieldChange('username', e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={formValues.password}
            onChange={(e) => handleFieldChange('password', e.target.value)}
          />
          <button onClick={handlePrevious}>Previous</button>
          <button onClick={handleNext}>Next</button>
        </>
      )}

      {state.currentStep === 3 && (
        <>
          <h2>Review & Submit</h2>
          <div style={{ background: '#f5f5f5', padding: '15px' }}>
            <p><strong>Name:</strong> {formValues.name}</p>
            <p><strong>Email:</strong> {formValues.email}</p>
            <p><strong>Username:</strong> {formValues.username}</p>
            <p><strong>Password:</strong> ••••••••</p>
          </div>
          <button onClick={handlePrevious}>Previous</button>
          <button onClick={handleSubmit}>Submit</button>
        </>
      )}
    </div>
  );
};

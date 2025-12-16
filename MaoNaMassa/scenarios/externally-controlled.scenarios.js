import http from 'k6/http';

export const options = {
  discardResponseBodies: true,
  scenarios: {
    contacts: {
      executor: 'externally-controlled',
      vus: 10,
      maxVUs: 50,
      duration: '10s',
    },
  },
};

export default function () {
  http.get('https://test.k6.io/contacts.php');
}
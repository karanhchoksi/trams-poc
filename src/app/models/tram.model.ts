export interface Tram {
  destination: string;
  direction: string;
  display: string;
  state: string;
  scheduled: string;
  expected: string;
  line: {
    id: number;
    designation: string;
  };
}

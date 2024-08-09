// GENERIC FUNCTION
function getFirstElement<Type>(array: Type[]) {
  return array[0];
}

const number = [1, 2, 3];
const firstNum = getFirstElement(number);

const strings = ['asdf', 'fgadf', 'asdfgqawe'];
const firstString = getFirstElement(strings);

const object = [{}, {}];
const firstObject = getFirstElement(object);

const input = document.querySelector<HTMLInputElement>('.input');
input?.value;

const map = new Map<string, number>();
map.set('123', 31);

// GENERIC TYPES
type ApiResponse<Data> = {
  data: Data;
  isError: boolean;
};

type UserResponse = ApiResponse<{ name: string; age: number }>;
type BlogResponse = ApiResponse<{ title: string }>;

const response: UserResponse = {
  data: {
    name: 'Kyle',
    age: 28,
  },
  isError: false,
};

const blogResponse: BlogResponse = {
  data: {
    title: 'Blog',
  },
  isError: true,
};

// Adding a default value to generic types
type StatusResponse<StatusData = { status: number }> = {
  data: StatusData;
  isError: boolean;
};

const statusResponse: StatusResponse = {
  data: {
    status: 200,
  },
  isError: true,
};

// Overriding default values in generic types
type OverrideResponse<OverrideData = { status: number }> = {
  data: OverrideData;
  isError: boolean;
};

const overrideResponse: OverrideResponse<{ name: string }> = {
  data: {
    name: 'override',
  },
  isError: true,
};

// Adding required generic types
type RequiredResponse<Data extends object> = {
  data: Data;
  isError: boolean;
};

const requiredResponse: RequiredResponse<{ name: string }> = {
  data: {
    name: 'constraint',
  },
  isError: false,
};

// Adding default values to required generic types
type RequiredDefaultResponse<Data extends object = { status: number }> = {
  data: Data;
  isError: boolean;
};

const requiredDefaultResponse: RequiredDefaultResponse = {
  data: {
    status: 404,
  },
  isError: true,
};

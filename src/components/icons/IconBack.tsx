type IconBackProps = {
  state: 'hover' | 'active' | 'default';
};

export const IconBack = ({ state = 'default' }: IconBackProps) => {
  let iconFill = 'var(--counts-black)';

  switch (state) {
    case 'hover': {
      iconFill = 'var(--clean-pool)';
      break;
    }
    case 'active': {
      iconFill = 'var(--clean-pool)';
      break;
    }
    default: {
      iconFill = 'var(--counts-black)';
      break;
    }
  }

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill={iconFill}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3 12C3 11.5858 3.33579 11.25 3.75 11.25H20.25C20.6642 11.25 21 11.5858 21 12C21 12.4142 20.6642 12.75 20.25 12.75H3.75C3.33579 12.75 3 12.4142 3 12Z"
        fill={iconFill}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.0303 4.71967C11.3232 5.01256 11.3232 5.48744 11.0303 5.78033L4.81066 12L11.0303 18.2197C11.3232 18.5126 11.3232 18.9874 11.0303 19.2803C10.7374 19.5732 10.2626 19.5732 9.96967 19.2803L3.21967 12.5303C2.92678 12.2374 2.92678 11.7626 3.21967 11.4697L9.96967 4.71967C10.2626 4.42678 10.7374 4.42678 11.0303 4.71967Z"
        fill={iconFill}
      />
    </svg>
  );
};

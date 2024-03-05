export function Error(props) {
    return <>{props.error && <p className="text-danger">{props.error}</p>}</>;
  }
  
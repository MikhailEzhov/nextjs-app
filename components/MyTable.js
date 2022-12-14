import Image from "next/image";
import Link from "next/link";
import { Table } from "react-bootstrap";

const MyTable = ({ cars, variant, children }) => {
  if (variant === "search") {
    return (
      <Table responsive>
        {children}
        <tbody>
          {cars.map(({ id, image, price, technical_characteristics }) => (
            <tr key={id} className="align-middle">
              <td>
                <Image
                  src={image}
                  alt={"https://"}
                  width={70}
                  height={70}
                  style={{ objectFit: "cover", borderRadius: "4px" }}
                />
              </td>
              <td>{price}</td>
              <td>{technical_characteristics?.brand}</td>
              <td>{technical_characteristics?.model}</td>
              <td>{technical_characteristics?.productionYear}</td>
              <td>{technical_characteristics?.body}</td>
              <td>{technical_characteristics?.mileage}</td>
              <td>
                <Link legacyBehavior href={`/view/${id}`}>
                  <a className="btn btn-primary btn-sm" role="button">
                    view
                  </a>
                </Link>
              </td>
              <td>
                <Link legacyBehavior href={`/update/${id}`}>
                  <a className="btn btn-primary btn-sm" role="button">
                    update
                  </a>
                </Link>
              </td>
              <td>
                <Link legacyBehavior href={`/delete/${id}`}>
                  <a className="btn btn-primary btn-sm" role="button">
                    delete
                  </a>
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    );
  }

  return (
    <Table responsive>
      <tbody>
        {cars.map(({ id, image, name }) => (
          <tr key={id} className="align-middle">
            <td>
              <Image
                src={image}
                alt={"https://"}
                width={70}
                height={70}
                style={{ objectFit: "cover", borderRadius: "4px" }}
              />
            </td>
            <td>{name}</td>
            <td>
              <Link legacyBehavior href={`/view/${id}`}>
                <a className="btn btn-primary btn-sm" role="button">
                  view
                </a>
              </Link>
            </td>
            <td>
              <Link legacyBehavior href={`/update/${id}`}>
                <a className="btn btn-primary btn-sm" role="button">
                  update
                </a>
              </Link>
            </td>
            <td>
              <Link legacyBehavior href={`/delete/${id}`}>
                <a className="btn btn-primary btn-sm" role="button">
                  delete
                </a>
              </Link>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default MyTable;

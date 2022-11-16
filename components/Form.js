import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { addCar, updateCar } from "../redux/actions";
import { useForm } from "react-hook-form";
import { Button } from "react-bootstrap";
import styles from "../styles/Form.module.scss";
import {
  transformationOnCreation,
  transformationOnUpdate,
} from "../utils/utils";

const Form = ({ car, action }) => {
  const dispatch = useDispatch();
  const router = useRouter();

  const [currentСar, setCurrentCar] = useState(car);
  const [showSpecifications, setShowSpecifications] = useState(false);
  const [showLoading, setShowLoading] = useState(false);

  useEffect(() => {
    if (action === "update") {
      setCurrentCar(car);
    }
  }, [action, car]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const addOption = (obj) => {
    setCurrentCar({
      ...currentСar,
      options: [...currentСar.options, obj],
    });
  };

  const editOption = (index, value) => {
    const newCurrentСar = { ...currentСar };
    newCurrentСar.options[index].option_name = value;
    setCurrentCar(newCurrentСar);
  };

  const postCar = async () => {
    setShowLoading(true);
    const newCar = await transformationOnCreation(currentСar);
    dispatch(addCar(newCar));
    setTimeout(() => {
      router.push("/");
    }, 3000);
  };

  const putCar = async () => {
    setShowLoading(true);
    const newCar = await transformationOnUpdate(currentСar);
    const { id, ...car } = await newCar;
    dispatch(updateCar(car, id));
    setTimeout(() => {
      router.push("/");
    }, 3000);
  };

  const onSubmit = () => {
    if (action === "create") {
      postCar();
    } else if (action === "update") {
      putCar();
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
      <label>
        image url:
        <input
          {...register("image", {
            required: true,
            pattern: /^https:\/\/(\S+)/,
          })}
          type="text"
          value={currentСar.image || ""}
          onChange={(e) =>
            setCurrentCar({ ...currentСar, image: e.target.value })
          }
          className={errors.image ? styles.invalid : styles.valid}
          placeholder="https://."
        />
      </label>
      <label>
        name:
        <input
          {...register("name", { required: true })}
          type="text"
          value={currentСar.name || ""}
          onChange={(e) =>
            setCurrentCar({ ...currentСar, name: e.target.value })
          }
          className={errors.name ? styles.invalid : styles.valid}
        />
      </label>
      <label>
        description:
        <input
          {...register("description", { required: true })}
          type="text"
          value={currentСar.description || ""}
          onChange={(e) =>
            setCurrentCar({ ...currentСar, description: e.target.value })
          }
          className={errors.description ? styles.invalid : styles.valid}
        />
      </label>
      <label>
        price:
        <input
          {...register("price", { required: true, min: 1 })}
          type="number"
          value={currentСar.price || 0}
          onChange={(e) =>
            setCurrentCar({ ...currentСar, price: e.target.value })
          }
          className={errors.price ? styles.invalid : styles.valid}
        />
      </label>
      <label>
        contacts:
        <input
          {...register("contacts", { required: true })}
          type="text"
          value={currentСar.contacts || ""}
          onChange={(e) =>
            setCurrentCar({ ...currentСar, contacts: e.target.value })
          }
          className={errors.contacts ? styles.invalid : styles.valid}
        />
      </label>

      {!showSpecifications ? (
        <Button
          size="sm"
          disabled={showLoading}
          onClick={() => setShowSpecifications(true)}
        >
          {action === "create" ? "add specifications" : "show specifications"}
        </Button>
      ) : (
        <>
          <label>
            brand:
            <input
              {...register("brand", { required: true })}
              type="text"
              value={currentСar.technical_characteristics.brand || ""}
              onChange={(e) =>
                setCurrentCar({
                  ...currentСar,
                  technical_characteristics: {
                    ...currentСar.technical_characteristics,
                    brand: e.target.value,
                  },
                })
              }
              className={errors.brand ? styles.invalid : styles.valid}
            />
          </label>
          <label>
            model:
            <input
              {...register("model", { required: true })}
              type="text"
              value={currentСar.technical_characteristics.model || ""}
              onChange={(e) =>
                setCurrentCar({
                  ...currentСar,
                  technical_characteristics: {
                    ...currentСar.technical_characteristics,
                    model: e.target.value,
                  },
                })
              }
              className={errors.model ? styles.invalid : styles.valid}
            />
          </label>
          <label>
            production year:
            <input
              {...register("productionYear", { required: true, min: 1 })}
              type="number"
              value={currentСar.technical_characteristics.productionYear || 0}
              onChange={(e) =>
                setCurrentCar({
                  ...currentСar,
                  technical_characteristics: {
                    ...currentСar.technical_characteristics,
                    productionYear: e.target.value,
                  },
                })
              }
              className={errors.productionYear ? styles.invalid : styles.valid}
            />
          </label>
          <label>
            body:
            <input
              {...register("body", { required: true })}
              type="text"
              value={currentСar.technical_characteristics.body || ""}
              onChange={(e) =>
                setCurrentCar({
                  ...currentСar,
                  technical_characteristics: {
                    ...currentСar.technical_characteristics,
                    body: e.target.value,
                  },
                })
              }
              className={errors.body ? styles.invalid : styles.valid}
            />
          </label>
          <label>
            mileage:
            <input
              {...register("mileage", { required: true, min: 1 })}
              type="number"
              value={currentСar.technical_characteristics.mileage || 0}
              onChange={(e) =>
                setCurrentCar({
                  ...currentСar,
                  technical_characteristics: {
                    ...currentСar.technical_characteristics,
                    mileage: e.target.value,
                  },
                })
              }
              className={errors.mileage ? styles.invalid : styles.valid}
            />
          </label>
        </>
      )}

      {currentСar.options?.length > 0 &&
        currentСar.options.map((option, index) => {
          return (
            <label key={index}>
              option:
              <input
                type="text"
                value={option.option_name || ""}
                name={index}
                onChange={(e) => editOption(index, e.target.value)}
                className={errors.option ? styles.invalid : styles.valid}
              />
            </label>
          );
        })}

      <Button
        size="sm"
        disabled={showLoading}
        onClick={() => addOption({ option_name: "" })}
      >
        add option
      </Button>

      <input
        type="submit"
        className="btn btn-primary btn-sm"
        disabled={showLoading}
        value={showLoading ? "LOADING..." : "submit"}
      />
    </form>
  );
};

export default Form;

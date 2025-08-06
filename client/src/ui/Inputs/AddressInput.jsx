import styles from "../../styles/Ui.module.sass";
import InputMask from "react-input-mask";
import classNames from "classnames";
import { getAddressHint } from "../../utils/index.js";
import { useState } from "react";

const AddressInput = ({ isDisabled, data, setData }) => {
	const [hints, setHints] = useState([]);
	const [isHintsShow, setHintsShow] = useState(false);

	const cityStreetHouseClass = classNames(
		styles.address__city_street_house,
		styles.input
	);

	const formatHints = (hints) => {
		if (!hints || !hints?.suggestions) return;

		const result = hints.suggestions.map((hint) => {
			if (hint.data.qc_geo < 2) return hint.value;
		});

		setHints(result);
	};

	//TODO: доделать
	const setAddressWithHints = (value) => {
		getAddressHint(value).then((res) => formatHints(res));

		setData({ ...data, address: value });
	};

	return (
		<div className={styles.address}>
			<div className={styles.address__city_street_house_wrap}>
				<InputMask
					className={cityStreetHouseClass}
					placeholder={"Город, улица, дом"}
					disabled={isDisabled}
					id={"city_street_house"}
					mask={""}
					onChange={(e) =>
						setData({ ...data, address: e.target.value })
					}
					onClick={() => setHintsShow(true)}
					value={data?.address}
				/>

				{isHintsShow ? (
					<div className={styles.address__hints}>
						{hints.map((hint, i) =>
							hint ? (
								<button
									onClick={() => {
										setData({ ...data, address: hint });
										setHintsShow(false);
									}}
									key={i}
									className={styles.address__hint}
								>
									{hint}
								</button>
							) : null
						)}
					</div>
				) : null}
			</div>

			<InputMask
				className={classNames(styles.input, styles.address__entrance)}
				mask={"99"}
				maskChar={""}
				placeholder={"Подъезд"}
				disabled={isDisabled}
				value={data?.entrance}
				onChange={(e) => setData({ ...data, entrance: e.target.value })}
			/>

			<InputMask
				className={classNames(styles.input, styles.address__floor)}
				mask={"99"}
				maskChar={""}
				placeholder={"Этаж"}
				disabled={isDisabled}
				value={data?.floor}
				onChange={(e) => setData({ ...data, floor: e.target.value })}
			/>

			<InputMask
				className={classNames(styles.input, styles.address__apartment)}
				placeholder={"Квартира"}
				mask={"9999"}
				maskChar={""}
				disabled={isDisabled}
				value={data?.apartment}
				onChange={(e) =>
					setData({ ...data, apartment: e.target.value })
				}
			/>

			<InputMask
				className={classNames(
					styles.input,
					styles.address__intercome_code
				)}
				placeholder={"Код домофона"}
				mask={"9999"}
				maskChar={""}
				disabled={isDisabled}
				value={data?.intercome_code}
				onChange={(e) =>
					setData({ ...data, intercome_code: e.target.value })
				}
			/>
		</div>
	);
};

export default AddressInput;

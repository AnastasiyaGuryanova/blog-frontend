import { Icon, Input } from "../../../../components";
import styled from "styled-components";

const SpecialPanelContainer = ({ publishedAt, className, editButton }) => {
	return (
		<div className={className}>
			<div className="published-at">
				<Icon
					id="fa-calendar-o"
					size="18px"
					margin="0 7px 0 0"
					onClick={() => {}}
				/>
				{publishedAt}
			</div>
			<div className="buttons">
				{editButton}
				<Icon id="fa-trash-o" size="21px" onClick={() => {}} />
			</div>
		</div>
	);
};

export const SpecialPanel = styled(SpecialPanelContainer)`
	display: flex;
	justify-content: space-between;
	margin: ${({ margin }) => margin};

	& .published-at {
		display: flex;
		font-size: 18px;
	}

	& i {
		position: relative;
		top: -1px;
	}

	& .buttons {
		display: flex;
	}
`;
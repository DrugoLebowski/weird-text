// Vendor
import styled from 'styled-components';
import PropTypes from 'prop-types';

function colWidth(size) {
  return size * 100 / 12;
}

function calcWidth(span) {
  if (!span) return;

  return `width: ${colWidth(span)}%;`;
}

function calcLeftOffset(offset) {
  if (!offset) return;

  return `margin-left: ${colWidth(offset)}%`;
}

function calcRightOffset(offset) {
  if (!offset) return;

  return `margin-right: ${colWidth(offset)}%`;
}

const Column = styled.div`
  display: flex;
  padding: 0 15px;
  ${({ xs }) => xs ? calcWidth(xs) : 'width: 100%;' };
  ${({ offsetRightXs }) => offsetRightXs ? calcRightOffset(offsetRightXs) : 'margin-right: auto;' };
  ${({ offsetLeftXs }) => offsetLeftXs ? calcLeftOffset(offsetLeftXs) : 'margin-left: auto;' };

  @media only screen and (min-width: 768px) {
    ${({ sm }) => sm && calcWidth(sm) };
    ${({ offsetRightSm }) => offsetRightSm && calcRightOffset(offsetRightSm)};
    ${({ offsetLeftSm }) => offsetLeftSm && calcLeftOffset(offsetLeftSm)};
  }

  @media only screen and (min-width: 992px) {
    ${({ md }) => md && calcWidth(md) };
    ${({ offsetRightMd }) => offsetRightMd && calcRightOffset(offsetRightMd)};
    ${({ offsetLeftMd }) => offsetLeftMd && calcLeftOffset(offsetLeftMd)};
  }

  @media only screen and (min-width: 1200px) {
    ${({ lg }) => lg && calcWidth(lg) };
    ${({ offsetRightLg }) => offsetRightLg && calcRightOffset(offsetRightLg)};
    ${({ offsetLeftLg }) => offsetLeftLg && calcLeftOffset(offsetLeftLg)};
  }
`;

Column.propTypes = {
  xs: PropTypes.number,
  sm: PropTypes.number,
  md: PropTypes.number,
  lg: PropTypes.number,
  offsetRightXs: PropTypes.number,
  offsetRightSm: PropTypes.number,
  offsetRightMd: PropTypes.number,
  offsetRightLg: PropTypes.number,
  offsetLeftXs: PropTypes.number,
  offsetLeftSm: PropTypes.number,
  offsetLeftMd: PropTypes.number,
  offsetLeftLg: PropTypes.number,
};

export default Column;

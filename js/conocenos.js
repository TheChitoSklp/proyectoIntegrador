const collapseElementList = document.querySelectorAll('.collapse')
const collapseList = [...collapseElementList].map(collapseEl => new bootstrap.Collapse(collapseEl))

.collapse {
    &:not(.show) {
      display: none;
    }
  }
  
.collapsing {
    height: 0;
    overflow: hidden;
    @include transition($transition-collapse);
  
    &.collapse-horizontal {
      width: 0;
      height: auto;
      @include transition($transition-collapse-width);
    }
  }
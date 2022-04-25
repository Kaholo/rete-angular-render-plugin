import { NodeComponent } from './node/node.component';
function install(editor, params = {}) {
    editor.on('rendernode', ({ el, node, component, bindControl, bindSocket }) => {
        const ngComponent = component;
        if (ngComponent.render && ngComponent.render !== 'angular')
            return;
        const element = document.createElement('rete-element');
        const props = element;
        props.component = ngComponent.component || params.component || NodeComponent;
        props.props = Object.assign({}, ngComponent.props || {}, {
            node,
            editor,
            bindControl,
            bindSocket
        });
        el.appendChild(element);
    });
    editor.on('rendercontrol', ({ el, control }) => {
        const ngControl = control;
        if (ngControl.render && ngControl.render !== 'angular')
            return;
        const element = document.createElement('rete-element');
        const props = element;
        props.component = ngControl.component;
        props.props = ngControl.props;
        el.appendChild(element);
    });
    editor.on(['connectioncreated', 'connectionremoved'], connection => {
        connection.output.node.update();
        connection.input.node.update();
    });
    editor.on('nodeselected', () => {
        editor.nodes.forEach(n => n.update());
    });
}
export const AngularRenderPlugin = {
    name: 'angular-render',
    install
};
export { ReteModule } from './module';
export * from './types';
export { NodeService } from './node.service';
export { NodeComponent } from './node/node.component';
export { SocketComponent } from './socket/socket.component';
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0EsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBRXRELFNBQVMsT0FBTyxDQUFDLE1BQWtCLEVBQUUsU0FBcUMsRUFBRTtJQUN4RSxNQUFNLENBQUMsRUFBRSxDQUFDLFlBQVksRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLElBQUksRUFBRSxTQUFTLEVBQUUsV0FBVyxFQUFFLFVBQVUsRUFBRSxFQUFFLEVBQUU7UUFDekUsTUFBTSxXQUFXLEdBQUcsU0FBNEMsQ0FBQztRQUVqRSxJQUFJLFdBQVcsQ0FBQyxNQUFNLElBQUksV0FBVyxDQUFDLE1BQU0sS0FBSyxTQUFTO1lBQUUsT0FBTztRQUVuRSxNQUFNLE9BQU8sR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLGNBQWMsQ0FBQyxDQUFDO1FBQ3ZELE1BQU0sS0FBSyxHQUFpQixPQUFjLENBQUM7UUFFM0MsS0FBSyxDQUFDLFNBQVMsR0FBRyxXQUFXLENBQUMsU0FBUyxJQUFJLE1BQU0sQ0FBQyxTQUFTLElBQUksYUFBYSxDQUFDO1FBQzdFLEtBQUssQ0FBQyxLQUFLLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFFLEVBQUUsV0FBVyxDQUFDLEtBQUssSUFBSSxFQUFFLEVBQUU7WUFDckQsSUFBSTtZQUNKLE1BQU07WUFDTixXQUFXO1lBQ1gsVUFBVTtTQUNiLENBQUMsQ0FBQztRQUVILEVBQUUsQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDNUIsQ0FBQyxDQUFDLENBQUM7SUFFSCxNQUFNLENBQUMsRUFBRSxDQUFDLGVBQWUsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLE9BQU8sRUFBRSxFQUFFLEVBQUU7UUFDM0MsTUFBTSxTQUFTLEdBQUcsT0FBb0MsQ0FBQztRQUV2RCxJQUFJLFNBQVMsQ0FBQyxNQUFNLElBQUksU0FBUyxDQUFDLE1BQU0sS0FBSyxTQUFTO1lBQUUsT0FBTztRQUUvRCxNQUFNLE9BQU8sR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLGNBQWMsQ0FBQyxDQUFDO1FBQ3ZELE1BQU0sS0FBSyxHQUFpQixPQUFjLENBQUM7UUFFM0MsS0FBSyxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUMsU0FBUyxDQUFDO1FBQ3RDLEtBQUssQ0FBQyxLQUFLLEdBQUcsU0FBUyxDQUFDLEtBQUssQ0FBQztRQUU5QixFQUFFLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQzVCLENBQUMsQ0FBQyxDQUFDO0lBQ0gsTUFBTSxDQUFDLEVBQUUsQ0FBQyxDQUFDLG1CQUFtQixFQUFFLG1CQUFtQixDQUFDLEVBQUUsVUFBVSxDQUFDLEVBQUU7UUFDL0QsVUFBVSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7UUFDaEMsVUFBVSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7SUFDbkMsQ0FBQyxDQUFDLENBQUM7SUFDSCxNQUFNLENBQUMsRUFBRSxDQUFDLGNBQWMsRUFBRSxHQUFHLEVBQUU7UUFDM0IsTUFBTSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQztJQUMxQyxDQUFDLENBQUMsQ0FBQztBQUNQLENBQUM7QUFFRCxNQUFNLENBQUMsTUFBTSxtQkFBbUIsR0FBRztJQUMvQixJQUFJLEVBQUUsZ0JBQWdCO0lBQ3RCLE9BQU87Q0FDVixDQUFDO0FBQ0YsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLFVBQVUsQ0FBQztBQUN0QyxjQUFjLFNBQVMsQ0FBQztBQUN4QixPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDN0MsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQ3RELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFR5cGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5vZGVFZGl0b3IgfSBmcm9tICdyZXRlJztcbmltcG9ydCB7IEFuZ3VsYXJDb250cm9sLCBFbGVtZW50UHJvcHMsIEFuZ3VsYXJDb21wb25lbnREYXRhIH0gZnJvbSAnLi90eXBlcyc7XG5pbXBvcnQgeyBOb2RlQ29tcG9uZW50IH0gZnJvbSAnLi9ub2RlL25vZGUuY29tcG9uZW50JztcblxuZnVuY3Rpb24gaW5zdGFsbChlZGl0b3I6IE5vZGVFZGl0b3IsIHBhcmFtcyA6IHsgY29tcG9uZW50PzogVHlwZTxhbnk+IH0gPSB7fSkge1xuICAgIGVkaXRvci5vbigncmVuZGVybm9kZScsICh7IGVsLCBub2RlLCBjb21wb25lbnQsIGJpbmRDb250cm9sLCBiaW5kU29ja2V0IH0pID0+IHtcbiAgICAgICAgY29uc3QgbmdDb21wb25lbnQgPSBjb21wb25lbnQgYXMgdW5rbm93biBhcyBBbmd1bGFyQ29tcG9uZW50RGF0YTtcblxuICAgICAgICBpZiAobmdDb21wb25lbnQucmVuZGVyICYmIG5nQ29tcG9uZW50LnJlbmRlciAhPT0gJ2FuZ3VsYXInKSByZXR1cm47XG5cbiAgICAgICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3JldGUtZWxlbWVudCcpO1xuICAgICAgICBjb25zdCBwcm9wczogRWxlbWVudFByb3BzID0gZWxlbWVudCBhcyBhbnk7XG5cbiAgICAgICAgcHJvcHMuY29tcG9uZW50ID0gbmdDb21wb25lbnQuY29tcG9uZW50IHx8IHBhcmFtcy5jb21wb25lbnQgfHwgTm9kZUNvbXBvbmVudDtcbiAgICAgICAgcHJvcHMucHJvcHMgPSBPYmplY3QuYXNzaWduKHt9LCBuZ0NvbXBvbmVudC5wcm9wcyB8fCB7fSwge1xuICAgICAgICAgICAgbm9kZSxcbiAgICAgICAgICAgIGVkaXRvcixcbiAgICAgICAgICAgIGJpbmRDb250cm9sLFxuICAgICAgICAgICAgYmluZFNvY2tldFxuICAgICAgICB9KTtcblxuICAgICAgICBlbC5hcHBlbmRDaGlsZChlbGVtZW50KTtcbiAgICB9KTtcblxuICAgIGVkaXRvci5vbigncmVuZGVyY29udHJvbCcsICh7IGVsLCBjb250cm9sIH0pID0+IHtcbiAgICAgICAgY29uc3QgbmdDb250cm9sID0gY29udHJvbCBhcyB1bmtub3duIGFzIEFuZ3VsYXJDb250cm9sO1xuXG4gICAgICAgIGlmIChuZ0NvbnRyb2wucmVuZGVyICYmIG5nQ29udHJvbC5yZW5kZXIgIT09ICdhbmd1bGFyJykgcmV0dXJuO1xuXG4gICAgICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdyZXRlLWVsZW1lbnQnKTtcbiAgICAgICAgY29uc3QgcHJvcHM6IEVsZW1lbnRQcm9wcyA9IGVsZW1lbnQgYXMgYW55O1xuXG4gICAgICAgIHByb3BzLmNvbXBvbmVudCA9IG5nQ29udHJvbC5jb21wb25lbnQ7XG4gICAgICAgIHByb3BzLnByb3BzID0gbmdDb250cm9sLnByb3BzO1xuXG4gICAgICAgIGVsLmFwcGVuZENoaWxkKGVsZW1lbnQpO1xuICAgIH0pO1xuICAgIGVkaXRvci5vbihbJ2Nvbm5lY3Rpb25jcmVhdGVkJywgJ2Nvbm5lY3Rpb25yZW1vdmVkJ10sIGNvbm5lY3Rpb24gPT4ge1xuICAgICAgICBjb25uZWN0aW9uLm91dHB1dC5ub2RlLnVwZGF0ZSgpO1xuICAgICAgICBjb25uZWN0aW9uLmlucHV0Lm5vZGUudXBkYXRlKCk7XG4gICAgfSk7XG4gICAgZWRpdG9yLm9uKCdub2Rlc2VsZWN0ZWQnLCAoKSA9PiB7XG4gICAgICAgIGVkaXRvci5ub2Rlcy5mb3JFYWNoKG4gPT4gbi51cGRhdGUoKSk7XG4gICAgfSk7XG59XG5cbmV4cG9ydCBjb25zdCBBbmd1bGFyUmVuZGVyUGx1Z2luID0ge1xuICAgIG5hbWU6ICdhbmd1bGFyLXJlbmRlcicsXG4gICAgaW5zdGFsbFxufTtcbmV4cG9ydCB7IFJldGVNb2R1bGUgfSBmcm9tICcuL21vZHVsZSc7XG5leHBvcnQgKiBmcm9tICcuL3R5cGVzJztcbmV4cG9ydCB7IE5vZGVTZXJ2aWNlIH0gZnJvbSAnLi9ub2RlLnNlcnZpY2UnO1xuZXhwb3J0IHsgTm9kZUNvbXBvbmVudCB9IGZyb20gJy4vbm9kZS9ub2RlLmNvbXBvbmVudCc7XG5leHBvcnQgeyBTb2NrZXRDb21wb25lbnQgfSBmcm9tICcuL3NvY2tldC9zb2NrZXQuY29tcG9uZW50JztcbiJdfQ==